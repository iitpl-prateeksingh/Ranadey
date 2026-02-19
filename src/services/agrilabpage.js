import { ENDPOINTS } from "./apiEndpoint";
import { apiRequest } from "./api";

export const getAgriLabPage = async () => {
  return apiRequest(ENDPOINTS.GETAGRILABPAGE, {
    method: "GET",
    cache: "no-store",
  });
};
