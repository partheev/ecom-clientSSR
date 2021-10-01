export const StateContext = React.createContext()
const initialState = {
  cartItems: [
    {
      productId: null,
      cartCount: 0,
    },
  ],
}
