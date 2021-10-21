import React from 'react'
import styles from './navbar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LogoutIcon from '@mui/icons-material/Logout'
import ChatIcon from '@mui/icons-material/Chat'
import Link from 'next/link'
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
      href: '/myorders',
    },
    {
      title: 'My Chat',
      symbol: <ChatIcon />,
      href: '/mychat',
    },
    {
      title: 'Logout',
      symbol: <LogoutIcon />,
      href: '/logout',
    },
  ]
  const DropDown = () => {
    return (
      <div className={styles.accdrop}>
        {dropList.map((list) => {
          return (
            <Link key={list.title} href={list.href}>
              <div className={styles.dropitem}>
                {list.symbol}
                <span>{list.title}</span>
              </div>
            </Link>
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
