import BASE_URL from "./BaseUrl";

export const apiRequest = async (
  endpoint,
  { method = "GET", body = null, headers = {}, isFormData = false } = {},
) => {
  console.log("API CALL:", endpoint);

  try {
    // 🔑 Get token from localStorage (client side only)
    let token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("adminToken");
    }

    // Auto-detect FormData bodies to avoid setting Content-Type
    const bodyIsFormData = isFormData || body instanceof FormData;

    const options = {
      method,
      headers: {
        // Only set JSON Content-Type when body is NOT FormData and no explicit header provided
        ...(!bodyIsFormData && !headers["Content-Type"]
          ? { "Content-Type": "application/json" }
          : {}),
        ...headers,
      },
    };

    // 🔥 Attach token if present
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }

    // Only attach body if not GET
    if (method !== "GET" && body) {
      if (body instanceof FormData) {
        options.body = body;
      } else {
        options.body = JSON.stringify(body);
      }
    }

    const urlToFetch =
      endpoint &&
      typeof endpoint === "string" &&
      (endpoint.startsWith("http") || endpoint.startsWith("https"))
        ? endpoint
        : `${BASE_URL}${endpoint}`;

    const res = await fetch(urlToFetch, options);

    const contentType = res.headers.get("content-type") || "";

    // Read response as text first, then try JSON.parse safely.
    const rawText = await res.text();
    let data;
    try {
      if (contentType.includes("application/json")) {
        data = JSON.parse(rawText || "null");
      } else {
        // Some servers may mislabel content-type; attempt to parse JSON if it looks like JSON
        try {
          data = JSON.parse(rawText);
        } catch (e) {
          data = rawText;
        }
      }
    } catch (err) {
      // Fallback to raw text on any parse error
      data = rawText;
    }

    if (!res.ok) {
      const msg =
        data && typeof data === "object" && data.message
          ? data.message
          : typeof data === "string"
            ? data
            : "Request failed";
      throw new Error(msg);
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Media upload helper
export const uploadFile = async (file, type) => {
  const formData = new FormData();
  formData.append(type, file);

  const res = await apiRequest(`/upload/${type}`, {
    method: "POST",
    body: formData,
    isFormData: true,
  });

  // 🔥 clean URL here
  if (res?.data?.url) {
    res.data.url = res.data.url.replace(/\/api\/v1/g, "");
  }

  return res;
};
