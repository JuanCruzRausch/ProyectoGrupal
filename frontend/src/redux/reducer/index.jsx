import categories from '../../components/Json/categories'
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_CATEGORY,
  ORDENADO,
  // GET_CATEGORIES,
  GET_PRODUCT
} from '../actions/index';

const initialState = {
  allProductCache: [],
  Allproduct: [],
  FilterProducts: [],
  Detail:[],
  categories,
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS_BY_CATEGORY:
      const AllProd = state.allProductCache
      const filter = payload === "Todos" ? AllProd : AllProd.filter(e => e.category === payload)
      return {
        ...state,
        Allproduct: filter,
      };
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        allProductCache: payload,
        Allproduct: payload,
        Detail: payload,
      };
    }
    case GET_PRODUCT: 
    return{
      ...state,
      Allproduct: state.allProductCache.filter(e => e.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase()))
    }
    case GET_PRODUCT_BY_ID:
      return{
        ...state,
        Detail: payload,
      }
    case ORDENADO:
      let sortArray = [...state.Allproduct];

      if (payload === 'A-Z')
        sortArray = sortArray.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      if (payload === 'Z-A')
        sortArray = sortArray.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      if (payload === 'High to Low')
        sortArray = sortArray.sort((a, b) => b.price - a.price);
      if (payload === 'Low to High')
        sortArray = sortArray.sort((a, b) => a.price - b.price);
      return {
        ...state,
        Allproduct: [...sortArray],
      };
    default:
      return state;
  }
}

export default reducer;
