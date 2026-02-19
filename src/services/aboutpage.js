import { ENDPOINTS } from "./apiEndpoint";
import { apiRequest } from "./api";

export const getAboutPage = async () => {
  return apiRequest(ENDPOINTS.GETABOUTPAGE, {
    method: "GET",
    cache: "no-store",
  });
};