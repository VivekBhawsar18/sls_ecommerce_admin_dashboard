import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import customerData from "../../jsonData/CustomerData.json"; // Correct path

const getUsers = async () => {
  const response = await axios.get(`${base_url}user/all-users`);
  return response.data;
};

const customerService = {
  customerData,
  getUsers,
};

export default customerService;
