import React from 'react'

import styles from './productcard.module.css'

import Link from 'next/link'
import { AddToCartButtonCard } from './AddToCartButtonCard'
function MultiActionAreaCard({ prod }) {
  return (
    <div className={styles.card}>
      <Link href={prod.image}>
        <a>
          <img src={prod.image} />
          <div className={styles.producttitle}>{prod.title}</div>
          <div className={styles.price}>₹{prod.price}</div>
          <div className={styles.withoutDiscountPrice}>₹100.00</div>
        </a>
      </Link>
      <AddToCartButtonCard id={prod.id} />
    </div>
  )
}
export default MultiActionAreaCard
