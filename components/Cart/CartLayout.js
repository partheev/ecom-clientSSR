import styles from './cart.module.css'
import { CartItems } from './CartItems'
import { Checkout } from './Checkout'

export const CartLayout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.layout_first}>
          <CartItems cartItems={props.cartItems} />
        </div>
        <div className={styles.layout_second}>
          <Checkout />
        </div>
      </div>
    </div>
  )
}
