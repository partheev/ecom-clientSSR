import React from 'react'
import styles from './navbar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LogoutIcon from '@mui/icons-material/Logout'
import ChatIcon from '@mui/icons-material/Chat'
export const MyAccTab = () => {
  const dropList = [
    {
      title: 'Profile',
      symbol: <AccountCircleIcon />,
      href: '/profile',
    },
    {
      title: 'Orders',
      symbol: <StorefrontIcon />,
      href: '/profile',
    },
    {
      title: 'My Chat',
      symbol: <ChatIcon />,
      href: '/profile',
    },
    {
      title: 'Logout',
      symbol: <LogoutIcon />,
      href: '/profile',
    },
  ]
  const DropDown = () => {
    return (
      <div className={styles.accdrop}>
        {dropList.map((list) => {
          return (
            <>
              <div key={list.title} className={styles.dropitem}>
                {list.symbol}
                <span>{list.title}</span>
              </div>
            </>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className={styles.myacc}>
        {/* <AccountCircleIcon /> */}
        <span>My Account</span>
        <DropDown />
      </div>
    </>
  )
}
