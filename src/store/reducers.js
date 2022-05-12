const initialState = {
  products: [],
};

export const basketReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { product } = action.payload;
      let products = [...state.products];
      const index = products.findIndex((element) => element.id === product.id);
      if (index != -1) {
        products[index] = {
          ...products[index],
          quantity: products[index].quantity + 1,
        };
      } else {
        products.push({ ...product });
      }

      return { products };
    case "DELETE_PRODUCT":
      const { productId } = action.payload;
      let copyProducts = [...state.products];
      const indexToDelete = copyProducts.findIndex(
        (element) => element.id === productId
      );
      const quantity = copyProducts[indexToDelete].quantity;
      if (quantity > 1) {
        copyProducts[indexToDelete] = {
          ...copyProducts[indexToDelete],
          quantity: copyProducts[indexToDelete].quantity - 1,
        };
      } else {
        copyProducts = copyProducts.filter(
          (product) => product.id !== productId
        );
      }
      return { products: copyProducts };
    default:
      return state;
  }
};
