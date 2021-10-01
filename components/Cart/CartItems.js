import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import styles from './cart.module.css'
import { CartItem } from './CartItem'
import { useState } from 'react'
export const CartItems = (props) => {
  const [cartItems, setcartItems] = useState(props.cartItems)
  const deleteItem = (itemId) => {
    const items = cartItems.filter((i) => i.id !== itemId)
    setcartItems(items)
  }
  return (
    <div className={styles.cartitems}>
      <div className={styles.cartHeader}>
        <div className={styles.cartname}>MY CART</div>
        <div className={styles.cartheadertotalprice}>TOTAL PRICE: ₹200.30</div>
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}></Box>
      <Divider />
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  )
}
