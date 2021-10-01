import Button from '@mui/material/Button'
import styles from './addtocartbuttoncard.module.css'
import { useContext } from 'react'

import { reducerContants } from '../../utils/reducerContants'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { GlobalContext } from '../../StateManagement/GlobalState'
export const AddToCartButtonCard = (props) => {
  const { state, dispatch } = useContext(GlobalContext)
  let foundProduct

  foundProduct = state.cartItems.find((item) => {
    return item.productId === props.id
  })

  const addToCart = (id) => {
    dispatch({ type: reducerContants.ADDTOCART, payload: id })
  }
  const productIncrement = (id) => {
    dispatch({ type: reducerContants.INCREMENTCARTITEM, payload: id })
  }
  const productDecrement = (id) => {
    dispatch({ type: reducerContants.DECREMENTCARTITEM, payload: id })
  }

  const button = () => {
    if (!foundProduct) {
      return (
        <Button
          onClick={() => addToCart(props.id)}
          className={styles.button}
          variant='contained'
        >
          Add to cart
        </Button>
      )
    } else {
      return (
        <button className={styles.button}>
          <div className={styles.buttonelements}>
            <div
              className={styles.buttonactions}
              onClick={() => productIncrement(foundProduct.productId)}
            >
              <AddIcon />
            </div>
            <div className={styles.count}>{foundProduct.cartCount}</div>
            <div
              className={styles.buttonactions}
              onClick={() => productDecrement(foundProduct.productId)}
            >
              <RemoveIcon />
            </div>
          </div>
        </button>
        // <Button
        //   startIcon={<AddIcon />}
        //   endIcon={<RemoveIcon />}
        //   className={styles.button}
        //   variant='contained'
        // >
        //   <div className={styles.addedProduct}>
        //     <div className={styles.count}>{foundProduct.cartCount}</div>
        //   </div>
        // </Button>
      )
    }
  }
  return button()
}
