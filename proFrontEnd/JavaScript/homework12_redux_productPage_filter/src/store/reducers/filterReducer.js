import { filterActionTypes } from "../actions/filterActions.js";

const initialState = {
  category: "",
  minPrice: 0,
  maxPrice: 0,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActionTypes.APPLY_CATEGORY_FILTER: {
      const newFilter = action.payload === "all" ? "" : action.payload;
      return { ...state, category: newFilter };
    }
    case filterActionTypes.PRICE_TO_CATEGORY_FILTER: {
      return { ...state, minPrice: state.minPrice + action.payload };
    }
    case filterActionTypes.PRICE_UP_CATEGORY_FILTER: {
      return { ...state, maxPrice: state.maxPrice + action.payload };
    }
    default:
      return state;
  }
};
