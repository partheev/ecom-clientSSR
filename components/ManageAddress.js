import React, { useState } from 'react'
import styles from './manageaddress.module.css'
import AddIcon from '@mui/icons-material/Add'
const addresses = [
  {
    customerName: 'Partheev',
    phoneNumber: 7369874633,
    postalCode: 516161,
    locality: 'kurnool',
    address: 'sldfjsajfsi odjflslsdjflsd afsjdfj',
    state: 'ap',
    city: 'kurnll',
    addressType: 'Home',
  },
  {
    customerName: 'Partheev',
    phoneNumber: 7369874633,
    postalCode: 516161,
    locality: 'kurnool',
    address: 'sldfjsajfsi odjflslsdjflsd afsjdfj',
    state: 'ap',
    city: 'kurnll',
    addressType: 'Home',
  },
  {
    customerName: 'Partheev',
    phoneNumber: 7369874633,
    postalCode: 516161,
    locality: 'kurnool',
    address: 'sldfjsajfsi odjflslsdjflsd afsjdfj',
    state: 'ap',
    city: 'kurnll',
    addressType: 'Home',
  },
]

export const ManageAddresses = () => {
  let key = 1
  const [newEdit, setnewEdit] = useState(false)

  const AddNewAddress = () => {
    return (
      <div className={styles.addaddress}>
        <AddIcon />
        <span>ADD A NEW ADDRESS</span>
      </div>
    )
  }
  return (
    <>
      <div className={styles.layout}>
        <h2>Manage Addresses</h2>
        <AddNewAddress />
        <div className={styles.addresslist}>
          {addresses.map((add) => {
            key++
            return (
              <div className={styles.addressbox} key={key}>
                <div></div>
                <button>{add.addressType}</button>
                <div>{`${add.customerName}    ${add.phoneNumber}`}</div>
                <p>{`${add.address}, ${add.locality}, ${add.city}, ${add.state} - ${add.postalCode}`}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
