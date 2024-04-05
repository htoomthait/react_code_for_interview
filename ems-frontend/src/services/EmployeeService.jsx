import axios from "axios";
import { backendBaseURL} from "../configs/AppConfigs";

const employeeURLSegment= "/api/employees";
const REST_API_BASE_URL = backendBaseURL+employeeURLSegment;

export const listEmployees = () => {
    const response = axios.get(REST_API_BASE_URL);
    return response;
};

export const addEmployee = async (data) => {
    const response = await axios.post(REST_API_BASE_URL, data);
    return response;
};

export const getEmployeeById = async (id) => {
    const response = await axios.get(REST_API_BASE_URL + "/" + id);
    return response;
};

export const updateEmployeeById = async (id, employee) => {
    const response = await axios.put(REST_API_BASE_URL + "/" + id, employee);
    return response;
};

export const deleteById = async (id) => {
    const response = await axios.delete(REST_API_BASE_URL + "/" + id);
    return response;
};
