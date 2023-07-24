import axios from "axios";

const getCategoryById = async (id) => {
  const response = await axios.get(`http://localhost:4000/categories/${id}`);
  return {
    name: response.data.name
  };
};
export default getCategoryById;
