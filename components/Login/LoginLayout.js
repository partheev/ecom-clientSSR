import React from 'react'
import styles from './login.module.css'
export const LoginLayout = ({ children }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.layout}>{children}</div>
    </div>
  )
}
