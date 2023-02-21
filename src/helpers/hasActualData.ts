import { ICar } from "@/dto/car";
import { car } from "@prisma/client";
import equalsCheck from "./equalsCheck";

const hasActualData = (savedEntries: car[], newEntries: ICar[]) => {
  const savedDetailUrls = savedEntries.map((o) => o.detailUrl);
  const newDetailUrls = newEntries.map((o) => o.detailUrl);
  return equalsCheck(savedDetailUrls, newDetailUrls);
};
export default hasActualData;
