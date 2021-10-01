import { Fragment, useMemo } from 'react'
import { HomePageCarousel } from '../components/Slider/Carousel'
import { ProductSlider } from '../components/Slider/ProductSlider'
import { data } from '../fakedata'

export default function Home({ products, popularProducts }) {
  console.log('homepage rednered')
  return (
    <Fragment>
      <HomePageCarousel />
      <ProductSlider products={products} title='Recommended Products' />
      <ProductSlider products={popularProducts} title='Popular Products' />
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  let recProducts = data
  let popularProducts = data

  return {
    props: {
      products: recProducts,
      popularProducts: popularProducts,
    }, // will be passed to the page component as props
  }
}
