import { Button } from '@mui/material'
import styles from './navbar.module.css'
import SearchIcon from '@mui/icons-material/Search'
export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <input placeholder='Search glocery, cloths, foods.....'></input>
      <Button className={styles.button} startIcon={<SearchIcon />}>
        Search
      </Button>
    </div>
  )
}
