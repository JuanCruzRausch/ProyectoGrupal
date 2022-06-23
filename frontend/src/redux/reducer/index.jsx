import products from '../../components/Json/data';
import categorias from '../../components/Json/Categorias'
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  ORDENADO,
  GET_CATEGORIES,
  GET_PRODUCT
} from '../actions/index';

const initialState = {
  Allproduct: [...products],
  FilterProducts: [...products],
  AllCategory: [...categorias],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS_BY_CATEGORY:
      const AllProd = state.FilterProducts
      const filter = payload === "Todos" ? AllProd : AllProd.filter(e => e.category === payload)
      return {
        ...state,
        Allproduct: filter,
      };
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        Allproduct: payload,
      };
    }
    case GET_PRODUCT: 
    return{
      ...state,
      Allproduct: state.Allproduct.filter(e => e.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase()))
    }
    case GET_CATEGORIES:
      return {
        ...state,
        AllCategory: payload,
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
