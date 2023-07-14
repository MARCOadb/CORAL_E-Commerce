import axios from "axios";

const getProducts = async (id) => {
  const response = await axios.get(`http://localhost:4000/products`);
  return {
    products: response,
  };
};
export default getProducts;
