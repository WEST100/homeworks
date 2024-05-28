import { combineReducers, createStore } from "redux";
import ProductReducer from "./reducers/product";

// const reducers = combineReducers({
//     products: productReducer,
//     users: userReducer
// })

const store = createStore(ProductReducer);

export default store;