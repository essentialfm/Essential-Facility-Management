import axios from "axios";

const DEFAULT_TIMEOUT = 15000;

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || "";
}

export const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const nextConfig = { ...config };
    nextConfig.headers = nextConfig.headers || {};

    if (process.env.NEXT_PUBLIC_API_KEY && !nextConfig.headers["x-api-key"]) {
      nextConfig.headers["x-api-key"] = process.env.NEXT_PUBLIC_API_KEY;
    }

    return nextConfig;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "An unexpected API error occurred.";

    return Promise.reject({
      ...error,
      message,
      status: error.response?.status || 500,
      data: error.response?.data || null,
    });
  },
);

export async function apiRequest({
  url,
  method = "get",
  data,
  params,
  headers,
  signal,
}) {
  const response = await apiClient({
    url,
    method,
    data,
    params,
    headers,
    signal,
  });

  return response.data;
}
