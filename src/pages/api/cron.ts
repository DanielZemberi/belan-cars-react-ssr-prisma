import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../services/internal';
import axios from 'axios';
import { ICar } from '@/dto/car';
import {
  findMissingProduct,
  hasRemovedProduct
} from '@/helpers/productHelpers';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.get<{ result: ICar[] }>(
      `https://belan-cars-react-ssr-prisma.vercel.app/api/getAllProducts`
    );
    const products = data.result;
    const savedProducts = await prisma.car.findMany();
    const productsToAdd = findMissingProduct(savedProducts, products);
    const removedProducts = hasRemovedProduct(savedProducts, products);

    if (removedProducts.length > 0) {
      for (const removedProduct of removedProducts) {
        await prisma.car.deleteMany({
          where: {
            detailUrl: removedProduct.detailUrl
          }
        });
      }
    }

    if (productsToAdd.length === 0) {
      res.status(200).json({ status: 200, data: 'UP TO DATE' });
      return res.end();
    }

    if (productsToAdd.length > 0) {
      for (const product of productsToAdd) {
        await prisma.car.create({
          data: {
            description: product.description.split(' + ')[0],
            detailUrl: product.detailUrl,
            previewImg: product.previewImg,
            price: product.price,
            title: product.title
          }
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
    externalResolver: true
  }
};
