import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (res: NextApiResponse, req: NextApiRequest) => {
  if (req.method !== "POST") {
    throw new Error("unknown request");
  }
};
