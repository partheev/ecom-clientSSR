import React from 'react'
import styles from './profile.module.css'
export const ProfileLayout = ({ children }) => {
  return (
    <div className={styles.bg}>
      <section className={`${styles.profilelayout}`}>{children}</section>
    </div>
  )
}
