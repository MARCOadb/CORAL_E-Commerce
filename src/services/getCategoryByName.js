import axios from "axios";

const getCategoryByName = async (name) => {
  const response = await axios.get(`http://localhost:4000/categories`);
  const category = response.data.find((item) => item.name === name);
  return category.id;
};
export default getCategoryByName;
