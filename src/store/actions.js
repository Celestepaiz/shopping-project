export const addNewProduct = (product) => {
  return { type: "ADD_PRODUCT", payload: { product } };
};

export const deleteProduct = (productId) => {
  return { type: "DELETE_PRODUCT", payload: { productId } };
};
