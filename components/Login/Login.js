import React from 'react'
import styles from './login.module.css'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import PhoneIcon from '@mui/icons-material/Phone'

export const Login = () => {
  const OrLoginLine = () => {
    return (
      <div className={styles.orlogin}>
        <span>Or login with</span>
      </div>
    )
  }
  const PhoneNumberTextField = () => {
    return (
      <div className={styles.phninput}>
        <TextField
          id='input-with-icon-textfield'
          label='TextField'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
          variant='standard'
        />
      </div>
    )
  }
  const GoogleLoginBtn = () => {
    const googleLoginHandler = () => {
      window.open('http://localhost:3000/google', '_self')
    }
    return (
      <div onClick={googleLoginHandler} className={styles.gbtn}>
        <img src='/images/googlelogo.png' />
        <span>Sign in with Google</span>
      </div>
    )
  }

  return (
    <div className={styles.login}>
      <div className={styles.logintitle}>Login with Phone number</div>
      <PhoneNumberTextField />
      <button>SEND OTP</button>
      <OrLoginLine />
      <GoogleLoginBtn />
    </div>
  )
}
