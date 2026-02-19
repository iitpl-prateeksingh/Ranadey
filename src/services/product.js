import { ENDPOINTS } from "./apiEndpoint";
import { apiRequest } from "./api";

export const getProductPage = async () => {
  return apiRequest(ENDPOINTS.GETPRODUTPAGE, {
    method: "GET",
    cache: "no-store",
  });
};
