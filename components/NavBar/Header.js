import styles from './navbar.module.css'
import SearchBar from './SearchBar'
import SetLocation from './SetLocation'
import Link from 'next/link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { styled } from '@mui/material/styles'
import useWindowDimensions from '../../hooks/windowsSize'
import { Badge, Button, IconButton } from '@mui/material'
import { StateContext } from '../../pages/_app'
import { useContext } from 'react'
export default function Header() {
  const { state } = useContext(StateContext)
  const { width } = useWindowDimensions()
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))
  const totalCartItems = () => {
    let count = 0
    state.cartItems.forEach((prod) => (count += prod.cartCount))
    return count
  }
  const badgeButton = () => (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={totalCartItems()} color='secondary'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  )

  const cartButton = () => {
    if (width < 1000) {
      return badgeButton()
    } else {
      return <Button startIcon={badgeButton()}>Cart</Button>
    }
  }
  return (
    <>
      <nav className={styles.nav}>
        <section className={styles.section1}>
          <div className={styles.brand}>
            <Link href='/'>LocalStores</Link>
          </div>
          <SetLocation />
        </section>
        <SearchBar />
        <section className={styles.section2}>
          <div className={styles.item}>
            <Link href='/signUp'>
              <a className={styles.login}>Login/SignUp</a>
            </Link>
          </div>
          <div className={styles.item}>
            <Link href='/cart'>{cartButton()}</Link>
          </div>
        </section>
      </nav>
    </>
  )
}
