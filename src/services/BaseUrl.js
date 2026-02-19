
const LIVE_BASE_URL = 'https://dev.invoidea.in/ranade/api/v1';
const IMAGE_BASE_URL = 'https://dev.invoidea.in/ranade';
// const LOCAL_BASE_URL = "http://localhost:8080/api/v1"; // Local development fallback — your backend was running on port 8080
// Prefer a NEXT_PUBLIC env var when available (exposed to the browser by Next.js)
const BASE_URL = LIVE_BASE_URL;
export default BASE_URL;
export { BASE_URL, IMAGE_BASE_URL };
