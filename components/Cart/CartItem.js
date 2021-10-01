import { Box } from '@mui/system'
import styles from './cart.module.css'
import { ItemQuantity } from './ItemQuantity'
import ClearIcon from '@mui/icons-material/Clear'
export const CartItem = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '10rem',
        margin: '0.5rem',
      }}
    >
      <img className={styles.itemimage} src={props.item.image} />
      <div className={styles.itemcontent}>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'end' }}>
            <div className={styles.price}>₹{props.item.price}</div>
            <div className={styles.withoutDiscountPrice}>₹100.00</div>
          </Box>

          <div className={styles.title}>{props.item.title}</div>
          <ItemQuantity />
        </Box>
      </div>

      <ClearIcon
        onClick={() => props.deleteItem(props.item.id)}
        className={styles.clear}
      />
    </Box>
  )
}
