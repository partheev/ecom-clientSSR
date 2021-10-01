import Slider from 'react-slick'
import MultiActionAreaCard from './ProductCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import styles from './productslider.module.css'
export const ProductSlider = (props) => {
  function NextArrow(props) {
    const { onClick } = props
    return (
      <div onClick={onClick} className={`${styles.arrow} ${styles.nextarrow}`}>
        <ArrowForwardIosIcon />
      </div>
    )
  }
  function PrevArrow(props) {
    const { onClick } = props
    return (
      <div onClick={onClick} className={`${styles.arrow} ${styles.prevarrow}`}>
        <ArrowBackIosNewIcon />
      </div>
    )
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    arrows: true,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1570,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  //   let prod = Array.from(productsData)
  return (
    <div className={styles.slider}>
      <h1>{props.title}</h1>
      <Slider {...settings}>
        {props.products.map((prod) => {
          return <MultiActionAreaCard key={prod.id} prod={prod} />
        })}
      </Slider>
    </div>
  )
}
