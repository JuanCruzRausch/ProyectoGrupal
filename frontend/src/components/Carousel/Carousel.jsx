import Carousel from 'react-bootstrap/Carousel';
import samsung from '../../assets/img/banners/samsung.jpeg'
import ps5 from '../../assets/img/banners/ps5.png'
import apple2 from '../../assets/img/banners/iphone.jpg'
import samsung2 from '../../assets/img/banners/samsung2.jpg'
import {CarouselContainer, Text} from './Carousel.module.css'
import { useNavigate } from 'react-router';
function Carousell() {
  const navigate = useNavigate()
  return (
<div className={CarouselContainer}>
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-300px"
          src={ps5}
          alt="First slide"
          onClick={() =>navigate("/products/62d04116996ea2855b7fb938")}
          />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-300px"
          src={apple2}
          alt="third slide"
          onClick={() =>navigate("/products/62d04819142f13793c85fda3")}
          />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-300px"
          src={samsung2}
          alt="four slide"
          onClick={() =>navigate("/products/62d04e9746e3fd79e7cb0210")}
          />
      </Carousel.Item>
    </Carousel>
</div>
  );
}

export default Carousell;