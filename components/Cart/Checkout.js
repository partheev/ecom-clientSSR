import React from 'react'
import styles from './cart.module.css'
export const Checkout = () => {
  const price = (itemName, price) => {
    return (
      <div className={styles.pricetag}>
        <div className={styles.coname}>{itemName}</div>
        <div className={styles.coprice}>{price}</div>
      </div>
    )
  }
  const CheckoutBtn = () => {
    return <button className={styles.checkoutbtn}>CHECKOUT</button>
  }
  return (
    <div className={styles.coContainer}>
      <h2>TOTAL</h2>
      <hr />
      {price('SUB-TOTAL', '₹200.0')}
      {price('DELIVERY', '₹5.3')}
      {price('TAX', '₹10.5')}
      {CheckoutBtn()}
      <hr />
    </div>
  )
}
