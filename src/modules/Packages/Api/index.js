import { apiRequest } from "../../Api";

export const Allpackages = async () => {
  try {
    const result = await apiRequest(`packages`, "GET", null, null);
    return result;
  } catch (error) {
    console.log("error", error.message);
  }
};
export const detailpackages = async (id) => {
  console.log(id);
  try {
    const result = await apiRequest(`packages/${id}`, "GET", null, null);
    return result;
  } catch (error) {
    console.log("error", error.message);
  }
};
