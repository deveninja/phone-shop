export const phoneReducer = (state = [], action ) => {
  switch (action.type) {
    case 'GET_PHONES':
      return [...state, action.payload]
  
    default:
      return state
  }
}

export const cartReducer = (state = [], action ) => {
  switch (action.type) {
    case 'GET_CART':
      return [...state, action.payload]
    default:
      return state
  }
}

export const currencyReducer = (state = [], action ) => {
  switch (action.type) {
    case 'GET_CURRENCY':
      return [...state, action.payload]
    default:
      return state
  }
}