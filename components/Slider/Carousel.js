import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import styles from './carousel.module.css'
const data = [
  {
    imageUrl:
      'https://www.sastadeals.in/wp-content/uploads/2021/01/banner1.jpg',
  },
  {
    imageUrl:
      'https://assets.indiadesire.com/images/Big%20Bazaar%20Half%20Price%20Sale%20june%202021.jpg',
  },
  {
    imageUrl:
      'https://jiocare.net/wp-content/uploads/2017/11/jio-online-recharge-offers-e1511856092866.jpg',
  },
  {
    imageUrl:
      'https://fulfilmentstorage.blob.core.windows.net/images/b41aea06-c17e-4f90-b796-28f5e9cb7c9c_Offer-page.jpg',
  },
]

export function HomePageCarousel(props) {
  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div onClick={onClick} className={`${styles.arrow} ${styles.nextarrow}`}>
        <ArrowForwardIosIcon />
      </div>
    )
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div onClick={onClick} className={`${styles.arrow} ${styles.prevarrow}`}>
        <ArrowBackIosNewIcon />
      </div>
    )
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {data.map((e) => {
          return (
            <div key={e.imageUrl}>
              <img className={styles.img} src={e.imageUrl} alt='picture' />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
