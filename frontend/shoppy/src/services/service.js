import api from "./config";

const getCategories = async () => {
  try {
    const response = await api.get("/shop/categories/");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export { getCategories };
