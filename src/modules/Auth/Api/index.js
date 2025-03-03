import axios from "axios";

const Signup = async (data) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/api/v1/auth/signup",
      data,
      null
    );
    return result;
  } catch (error) {
    console.log("error", error.message);
  }
};
const login = async (data) => {
  console.log(data, "logindata");

  try {
    const result = await axios.post(
      "http://localhost:8000/api/v1/agency/login",
      data,
      null
    );
    return result.data;
  } catch (error) {
    console.log("error", error.message);
  }
};

export { Signup, login };
