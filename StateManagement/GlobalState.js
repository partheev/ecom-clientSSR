import React from 'react'
import { reducerContants } from '../utils/reducerContants'

export const GlobalContext = React.createContext()
const initialState = {
  cartItems: [
    {
      productId: null,
      cartCount: 0,
    },
  ],
  user: {
    name: null,
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerContants.ADDTOCART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            productId: action.payload,
            cartCount: 1,
          },
        ],
      }
    case reducerContants.INCREMENTCARTITEM:
      let cartItems = [...state.cartItems]
      const newCartList = cartItems.map((item) =>
        action.payload === item.productId
          ? {
              cartCount: item.cartCount + 1,
              productId: item.productId,
            }
          : item
      )

      return {
        ...state,
        cartItems: newCartList,
      }
    case reducerContants.DECREMENTCARTITEM:
      const prevItems = [...state.cartItems]
      const newDecrementList = []
      prevItems.forEach((item) => {
        if (action.payload === item.productId) {
          if (item.cartCount > 1) {
            const updatedItem = {
              cartCount: item.cartCount - 1,
              productId: item.productId,
            }
            newDecrementList.push(updatedItem)
          }
        } else {
          newDecrementList.push(item)
        }
      })

      return {
        ...state,
        cartItems: newDecrementList,
      }
    default:
      return state
  }
}

export const GlobalState = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
