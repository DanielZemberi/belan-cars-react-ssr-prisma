import axios from "axios";

export const getAllProducts = () => {
  return axios.get("/api/getAllProducts");
};

export const getProductDetail = (url: string) => {
  return axios.post("/api/getProductDetail", {
    url,
  });
};
