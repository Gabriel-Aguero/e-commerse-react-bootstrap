const BASE_URL = "https://fakestoreapi.com/";

export const getProducts = async () => {
  return fetch(`${BASE_URL}products`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getProductById = async (id) => {
  return fetch(`${BASE_URL}products/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getCategories = async () => {
  return fetch(`${BASE_URL}/products/categories`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getProductByCategory = async (category) => {
  return fetch(`${BASE_URL}products?category=${category}`)
    .then((res) => res.json())
    .then((data) => data);
};
