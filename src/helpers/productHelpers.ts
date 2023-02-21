import { ICar } from "@/dto/car";
import { car } from "@prisma/client";

export const hasRemovedProduct = (saved: car[], products: ICar[]) => {
  return saved.filter((el) => {
    return products.every((f) => {
      return f.detailUrl !== el.detailUrl;
    });
  });
};

export const findMissingProduct = (saved: car[], products: ICar[]) => {
  return products.filter((el) => {
    return saved.every((f) => {
      return f.detailUrl !== el.detailUrl;
    });
  });
};
