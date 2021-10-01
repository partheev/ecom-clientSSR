import { CartLayout } from '../components/Cart/CartLayout'
import { data } from '../fakedata'
import { StateContext } from './_app'
import { useContext } from 'react'
export default function cart(props) {
  return <CartLayout cartItems={props.cartItems}></CartLayout>
}

export async function getServerSideProps(context) {
  let recProducts = data
  return {
    props: {
      cartItems: recProducts,
    }, // will be passed to the page component as props
  }
}
