import React from 'react'
import styles from './profile.module.css'
import PersonIcon from '@mui/icons-material/Person'
import StorefrontIcon from '@mui/icons-material/Storefront'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import Link from 'next/link'
export const SideBarContent = () => {
  const ProfileName = () => {
    return (
      <div className={styles.profilename}>
        <img src='/images/profileicon.svg' />
        <div>
          <div>Partheev</div>
          <div>Hello</div>
        </div>
      </div>
    )
  }

  const Tabs = () => {
    const list = [
      {
        title: 'My Orders',
        href: '/myorders',
        symbol: <PersonIcon />,
      },
      {
        title: 'Profile Information',
        href: '/myorders',
        symbol: <StorefrontIcon />,
      },
      {
        title: 'Manage Addresses',
        href: '/manageAddresses',
        symbol: <LocationCityIcon />,
      },
      {
        title: 'Help',
        href: '/help',
        symbol: <HelpCenterIcon />,
      },
    ]
    return (
      <div className={styles.tabs}>
        {list.map((tab) => {
          return (
            <Link key={tab.title} href={tab.href}>
              <div className={styles.tab}>
                {tab.symbol}
                <div>{tab.title}</div>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
  return (
    <div className={styles.sidecontent}>
      <ProfileName />
      <Tabs />
    </div>
  )
}
