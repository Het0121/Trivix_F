import axios from "axios";

const API_BASE_URL = "https://trivix-b.vercel.app/api/v1";

export const apiRequest = async (
  endpoint,
  method = "GET",
  data = null,
  params = null,
  headers = {}
) => {
  try {
    const url = new URL(`${API_BASE_URL}/${endpoint}`);

    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
    }

    const config = {
      method,
      url: url.toString(),
      ...data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
