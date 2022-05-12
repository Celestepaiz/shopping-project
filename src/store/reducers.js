const initialState = {
  products: [],
};

export const basketReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { product } = action.payload;
      let products = [...state.products];
      const index = products.findIndex((element) => element.id === product.id);
      /**
       * If the product already exists then the quantity increase otherwise the product is added to products array.
       */
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
      /**
       * In case the quantity of the product to delete is higher than 1 then decrease the quantity otherwise the product will be deleted from products list.
       */
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
