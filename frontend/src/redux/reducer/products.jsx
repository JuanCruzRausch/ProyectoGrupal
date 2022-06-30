import categories from '../../components/Json/categories';
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_CATEGORY,
  ORDENADO,
  SET_PAGE,
  MAX_AND_MIN_PRICE,
  GET_PRODUCT,
  SIGN_UP_ALERT,
} from '../actions/index';

const initialState = {
  allProductCache: [],
  Allproduct: [],
  FilterProducts: [],
  Detail: [],
  pagina: 1,
  categories,
  signUpAlert: '',
  maxMinPrice:{
    max: Infinity,
    min: -Infinity
  }
};

function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case MAX_AND_MIN_PRICE:
      if((payload.max-payload.min)>=0){
        if(payload.max<=0) payload.max = Infinity
        if(payload.min<=0) payload.min = -Infinity
        return {...state, maxMinPrice: {max: payload.max, min: payload.min}}}
    case SIGN_UP_ALERT:
      return { ...state, signUpAlert: payload };
    case SET_PAGE:
      return { ...state, pagina: payload };
    case GET_PRODUCTS_BY_CATEGORY:
      const AllProd = state.allProductCache;
      const filter =
        payload === 'Todos'
          ? AllProd
          : AllProd.filter((e) => e.category.name === payload);
      return {
        ...state,
        Allproduct: filter.filter(e=>e.price>=state.maxMinPrice.min&&e.price<=state.maxMinPrice.max),
      };
    case GET_ALL_PRODUCTS:
      let categoriesCount = state.categories.map((category) => {
        return { ...category, count: 0 };
      });
      categoriesCount.forEach((category) => {
        payload.forEach((product, i) => {
          if (product.category.name === category.name) {
            category.count += 1;
          }
        });
      });
      return {
        ...state,
        categories: categoriesCount,
        allProductCache: payload,
        Allproduct: payload,
        Detail: payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        Allproduct: state.allProductCache.filter((e) =>
          e.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
        ).filter(e=>e.price>=state.maxMinPrice.min&&e.price<=state.maxMinPrice.max),
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        Detail: payload,
      };
    case ORDENADO:
      let sortArray = [...state.Allproduct];

      if (payload === 'A-Z')
        sortArray = sortArray.sort((a, b) => a.title.localeCompare(b.title));
      if (payload === 'Z-A')
        sortArray = sortArray.sort((a, b) => b.title.localeCompare(a.title));
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

export default productReducer;
