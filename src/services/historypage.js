import { ENDPOINTS } from "./apiEndpoint";
import { apiRequest } from "./api";

export const getHistoryPage = async () => {
  return apiRequest(ENDPOINTS.GETHISTORYPAGE, {
    method: "GET",
    cache: "no-store",
  });
};
