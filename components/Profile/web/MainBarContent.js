import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import styles from './profile.module.css'

export const MainBarContent = () => {
  const [emailEdit, setemailEdit] = useState(false)
  const [perEdit, setperEdit] = useState(false)
  const [phoneEdit, setphoneEdit] = useState(false)
  const Edit = ({ edit, setEdit }) => {
    return (
      <div className={styles.edit} onClick={() => setEdit(!edit)}>
        {edit ? <div>Cancle</div> : <div>Edit</div>}
      </div>
    )
  }
  const PersonalInfo = () => {
    const [firstName, setfirstName] = useState('Partheev')
    const [lastName, setlastName] = useState('Partheev')
    const [gender, setgender] = useState(null)
    console.log(gender)
    return (
      <>
        <div className={styles.infotitle}>
          <span>Profile Information</span>
          <Edit edit={perEdit} setEdit={setperEdit} />
        </div>
        <div className={styles.txtbox}>
          <TextField
            className={styles.txtfield}
            disabled={!perEdit}
            id='filled-basic'
            label='First Name'
            variant='filled'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <TextField
            className={styles.txtfield}
            disabled={!perEdit}
            id='filled-basic'
            label='Last Name'
            variant='filled'
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          {perEdit && <div className={styles.savebtn}>SAVE</div>}
        </div>
        <FormControl disabled={!perEdit} component='fieldset'>
          <FormLabel component='legend'>Gender</FormLabel>
          <RadioGroup
            row
            aria-label='gender'
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
          </RadioGroup>
        </FormControl>
      </>
    )
  }
  const EmailInfo = () => {
    const [email, setemail] = useState(null)

    return (
      <>
        <div className={styles.infotitle}>
          <span>Email Address</span>
          <Edit edit={emailEdit} setEdit={setemailEdit} />
        </div>
        <div className={styles.txtbox}>
          <TextField
            className={styles.txtfield}
            disabled={!emailEdit}
            id='filled-basic'
            label='Email'
            variant='filled'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          {emailEdit && <div className={styles.savebtn}>SAVE</div>}
        </div>
      </>
    )
  }

  const PhoneNumberInfo = () => {
    const [phoneNumber, setphoneNumber] = useState(null)

    return (
      <>
        <div className={styles.infotitle}>
          <span>Phone Number</span>
          <Edit edit={phoneEdit} setEdit={setphoneEdit} />
        </div>
        <div className={styles.txtbox}>
          <TextField
            className={styles.txtfield}
            disabled={!phoneEdit}
            id='filled-basic'
            label='Phone Number'
            variant='filled'
            value={phoneNumber}
            onChange={(e) => setphoneEdit(e.target.value)}
          />

          {phoneEdit && <div className={styles.savebtn}>SAVE</div>}
        </div>
      </>
    )
  }
  return (
    <div className={styles.maincontent}>
      <PersonalInfo />
      <EmailInfo />
      <PhoneNumberInfo />
    </div>
  )
}
