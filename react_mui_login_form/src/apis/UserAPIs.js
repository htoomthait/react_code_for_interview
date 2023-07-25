import axios from "axios";

const loginAPI = async (payload) => {
    console.log("loginAPI: ", payload.email, payload.password);
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/login`;

    const response = await axios.post(url, payload);
    if (response.status != 200)
        throw new Error("Failed on sign up request", response);

    return response;
};

export { loginAPI };
