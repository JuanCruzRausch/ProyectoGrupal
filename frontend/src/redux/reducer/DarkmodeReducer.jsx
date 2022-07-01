import { DARK_MODE } from '../actions/DarkActions'

// initial state
const initialState = {
  // checking mode from localstorage if falsey (e.g. 0, null, undefined, etc.) it will be false, otherwise true
  isdarkMode: !!JSON.parse(localStorage.getItem("darkmode")),
};

const darkModeReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case DARK_MODE:
      return {
        ...state,
        // getting value from the action file and changing isdarkMode State.
        isdarkMode: payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;