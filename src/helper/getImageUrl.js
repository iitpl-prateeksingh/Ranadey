import IMAGE_BASE_URL from "../services/BaseUrl";

export const getImageUrl = (path) => {
  if (!path) return null;

  let finalPath = path;

  // 🔥 remove /api/v1 if exists (backend issue fix)
  if (finalPath.includes("/api/v1")) {
    finalPath = finalPath.replace("/api/v1", "");
  }

  // ✅ if already full URL or blob → return cleaned URL
  if (
    finalPath.startsWith("http://") ||
    finalPath.startsWith("https://") ||
    finalPath.startsWith("blob:")
  ) {
    return finalPath;
  }
  console.log(
    finalPath,
    "final path for image URL",
    `${IMAGE_BASE_URL}${finalPath}.repla`,
  ); // Debugging log
  const fullUrl = `${IMAGE_BASE_URL}${finalPath}`.replace(/\/api\/v1/g, "");
  console.log(fullUrl, "full URL after cleanup");
  return fullUrl.replace(/\/api\/v1/g, "");
};
