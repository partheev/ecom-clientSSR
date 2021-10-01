import RoomIcon from '@mui/icons-material/Room'
import { Typography } from '@mui/material'
import useWindowDimensions from '../../hooks/windowsSize'
import styles from './navbar.module.css'

export default function SetLocation() {
  const { width } = useWindowDimensions()
  return (
    <div className={styles.location}>
      <RoomIcon />
      {/* <div className={styles.locationtitle}> */}
      {width > 1000 && (
        <Typography className={styles.locationtitle} variant='button'>
          Set your current location
        </Typography>
      )}
      {/* </div> */}
    </div>
  )
}
