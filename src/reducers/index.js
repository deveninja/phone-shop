import { combineReducers } from "redux";
import { phoneReducer, cartReducer, currencyReducer } from './productsReducer'



export default combineReducers({
  products: phoneReducer,
  cart: cartReducer,
  currency: currencyReducer
})