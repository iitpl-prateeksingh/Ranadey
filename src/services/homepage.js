import { ENDPOINTS } from "./apiEndpoint";
import { apiRequest } from "./api";

export const updateHomepage = async (data) => {
  return apiRequest(ENDPOINTS.UPDATEHOMEPAGE, {
    method: "PUT",
    body: data,
  });
};

export const getHomepage = async () => {
  return apiRequest(ENDPOINTS.GETHOMEPAGE, {
    method: "GET",
    cache: "no-store",
  });
};

export const getCategoryBySlug = async (slug) => {
  return apiRequest(ENDPOINTS.GET_CATEGORY_BY_SLUG, {
    cache: "no-store",
  });
};
