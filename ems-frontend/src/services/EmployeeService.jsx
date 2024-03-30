import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => {
    const response = axios.get(REST_API_BASE_URL);
    return response;
};

export const addEmployee = async (data) => {
    const response = await axios.post(REST_API_BASE_URL, data);
    return response;
};
