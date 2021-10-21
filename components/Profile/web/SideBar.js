import React from 'react'
import styles from './profile.module.css'
export const SideBar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>
}
