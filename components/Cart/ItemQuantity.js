import styles from './cart.module.css'
import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
export function ItemQuantity() {
  const [open, setOpen] = useState(false)
  const [qty, setqty] = useState(1)

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const List = () => {
    let value = 5
    return (
      <div className={styles.qtydropdown}>
        {[...Array(value).keys()].slice(1).map((num) => {
          return (
            <>
              <div
                onClick={() => {
                  setqty(num)
                  setOpen(false)
                }}
                className={styles.qtydropitem}
                key={num}
              >
                {num}
              </div>
            </>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div onClick={() => setOpen(!open)} className={styles.itemqty}>
        <div>Qty</div>
        <div className={styles.qtyValue}>{qty}</div>
        <div className={styles.qtyArrow}>
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
      </div>
      {open && <List />}
    </>
  )
}
