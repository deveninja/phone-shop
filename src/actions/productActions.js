import phones from "../config/phones"

export const fetchPhones = () => dispatch => {
  const products = phones
  dispatch({
    type: 'GET_PHONES',
    payload: products
  })
}

export const fetchCart = () => dispatch => {
  const cart = localStorage.getItem('shopping-cart') ? localStorage.getItem('shopping-cart') : []
  dispatch({
    type: 'GET_CART',
    payload: cart
  })
}

export const fetchCurrency = () => dispatch => {
  const currency = '$'
  dispatch({
    type: 'GET_CURRENCY',
    payload: currency
  })
}