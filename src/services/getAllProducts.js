import axios from "axios";

const getAllProducts = async () => {
  const response = await axios.get(`http://localhost:4000/products`);
  return response.data;
};
export default getAllProducts;
