import axios from "axios";

const getProductById = async (id) => {
  const response = await axios.get(`http://localhost:4000/products/${id}`);
  return {
    name: response.data.name,
    description: response.data.description,
    price: response.data.price,
    image: response.data.image,
  };
};
export default getProductById;
