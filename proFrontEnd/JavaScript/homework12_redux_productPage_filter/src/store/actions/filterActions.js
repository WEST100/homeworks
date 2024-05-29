export const filterActionTypes = {
  APPLY_CATEGORY_FILTER: "FILTER/APPLY_CATEGORY_FILTER",
  PRICE_TO_CATEGORY_FILTER: "PRICE_TO_CATEGORY_FILTER",
  PRICE_UP_CATEGORY_FILTER: "PRICE_UP_CATEGORY_FILTER",
};

export const applyCategoryFilterAction = (payload) => {
  return {
    type: filterActionTypes.APPLY_CATEGORY_FILTER,
    payload,
  };
};

export const categoryFilterPriceTo = (payload) => {
  return {
    type: filterActionTypes.PRICE_TO_CATEGORY_FILTER,
    payload,
  };
};

export const categoryFilterPriceUp = (payload) => {
  return {
    type: filterActionTypes.PRICE_UP_CATEGORY_FILTER,
    payload,
  };
};
