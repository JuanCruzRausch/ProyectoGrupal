import products from '../../components/Json/data';
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  ORDENADO,
} from '../actions/index';

const initialState = {
  Allproduct: [...products],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        Allproduct: payload,
      };
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        Allproduct: payload,
      };
    }
    case ORDENADO:
      let sortArray = [...state.Allproduct];

      if (action.payload === 'A-Z')
        sortArray = sortArray.sort((a, b) =>
          a.productName.localeCompare(b.productName)
        );
      if (action.payload === 'Z-A')
        sortArray = sortArray.sort((a, b) =>
          b.productName.localeCompare(a.productName)
        );
      if (action.payload === 'High to Low Rating')
        sortArray = sortArray.sort((a, b) => b.rating - a.rating);
      if (action.payload === 'Low to High Rating')
        sortArray = sortArray.sort((a, b) => a.rating - b.rating);
      //   if (action.payload === 'High to Low Price')
      //     sortArray = sortArray.sort(
      //       (a, b) => b.Number(productPrice) - a.Number(productPrice)
      //     );
      //   if (action.payload === 'Low to High Price')
      //     sortArray = sortArray.sort(
      //       (a, b) => a.Number(productPrice) - b.Number(productPrice)
      //     );
      return {
        ...state,
        AllProduct: [...sortArray],
      };
    default:
      return state;
  }
}

export default reducer;
