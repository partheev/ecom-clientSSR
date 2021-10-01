import Header from '../components/NavBar/Header'
import '../styles/globals.css'
import { reducerContants } from '../utils/reducerContants'
// -------------CAROUSEL CSS---------------
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
// ----------------------------

export const StateContext = React.createContext()
const initialState = {
  cartItems: [
    {
      productId: null,
      cartCount: 0,
    },
  ],
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
function MyApp({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Header />
      <Component {...pageProps} />
    </StateContext.Provider>
  )
}

export default MyApp
