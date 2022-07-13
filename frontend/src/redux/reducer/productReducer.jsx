import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_CATEGORY,
  ORDENADO,
  SET_PAGE,
  PRICE,
  GET_PRODUCT,
  SIGN_UP_ALERT,
  SINGLE_ITEM,
  CREATE_PRODUCT,
  DELETE_PUBLICATION,
  GET_ALL_CATEGORIES,
  PUBLICATION_ALERT,
  COUNT,
  SET_LOADING, 
  PUBLICATION_SELLER,
  SET_ORDER,
  SET_CATEGORY,
  SET_CATEGORIES_STATS
} from '../actions/index';

const initialState = {
  category:'',
  sort: 'A-Z',
  publicationSeller: [],
  publicationAlert: "none",
  allProductCache: [],
  Allproduct: [],
  FilterProducts: [],
  Detail: [],
  loading:"none",
  SingleItem:[],
  pagina: 1,
  allCategories: [],
  categories: [],
  signUpAlert: '',
  maxMinPrice:{
    max: Infinity,
    min: -Infinity
  }
};

function productReducer(state = initialState, { type, payload }) {
  
  switch (type) {
    case SET_CATEGORY:
      return {...state, category: payload}
    case SET_ORDER:
        return {...state, sort: payload}
    case PUBLICATION_SELLER:
      return {...state, publicationSeller: [...payload]}
    case SET_LOADING:
      return {...state, loading: payload}
    case PUBLICATION_ALERT:
      return {...state, publicationAlert: payload}
    case SET_CATEGORIES_STATS:
      return {...state, categories: payload}
    case PRICE:
      if((payload.max-payload.min)>=0){
        if(payload.max<=0) payload.max = Infinity
        if(payload.min<=0) payload.min = -Infinity
        return {...state, maxMinPrice: {max: payload.max, min: payload.min}}}

    case SIGN_UP_ALERT:
      return { ...state, signUpAlert: payload };

    case SET_PAGE:
      return { ...state, pagina: payload };

    case SINGLE_ITEM:
      return{
        ...state,
        SingleItem: payload
      }

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories:[...payload]
      }

    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        Allproduct: [...payload],
        loading: payload.length>0?"none":"enanos"
      };
    case DELETE_PUBLICATION:
      return{
        ...state,
        publicationSeller: state.productReducer.publicationSeller.filer(e => e.id !== payload)
      }
      
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProductCache: payload,
        Allproduct: payload,
        Detail: payload,
        loading: payload.length>0?"none":"enanos"
      };

    case GET_PRODUCT:
      return {
        ...state,
        Allproduct:[...payload],
        loading: payload.length>0?"none":"enanos"
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
      }
    default:
      return state;
  }
}

export default productReducer;