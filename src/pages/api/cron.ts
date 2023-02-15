import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../services/internal";
import axios from "axios";
import { ICar } from "@/dto/car";
import {
  findMissingProduct,
  hasRemovedProduct,
} from "@/helpers/productHelpers";

const localhostUrl = process.env.LOCALHOST_URL;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    throw new Error("unknown request");
  }
  try {
    const { data } = await axios.get<{ result: ICar[] }>(
      `${localhostUrl}/api/getAllProducts`
    );
    const products = data.result;
    const savedProducts = await prisma.car.findMany();
    const productsToAdd = findMissingProduct(savedProducts, products);
    const removedProducts = hasRemovedProduct(savedProducts, products);

    if (removedProducts.length > 0) {
      for (const removedProduct of removedProducts) {
        await prisma.car.delete({
          where: {
            // @ts-expect-error fix correct type
            detailUrl: removedProduct.detailUrl,
          },
        });
      }
    }

    if (productsToAdd.length === 0) {
      res.status(200).json({ status: 200, data: "UP TO DATE" });
      return res.end();
    }

    if (productsToAdd.length > 0) {
      for (const product of productsToAdd) {
        await prisma.car.create({
          data: {
            description: product.description,
            detailUrl: product.detailUrl,
            previewImg: product.previewImg,
            price: product.price,
            title: product.title,
          },
        });
      }
    }

    return res.status(200).json({ status: 200 });
  } catch (error) {
    const err = error as any;
    res.status(500).send(err.message);
  }
};

export default handler;

export const config = {
  api: {
    externalResolver: true,
  },
};
