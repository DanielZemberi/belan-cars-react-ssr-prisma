import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    throw new Error("unknown request");
  }

  return res.status(200).json({ status: "OK" });
}
