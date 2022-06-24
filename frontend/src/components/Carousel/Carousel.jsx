import Carousel from 'react-bootstrap/Carousel';
import samsung from '../../assets/img/banners/samsung.jpeg'
import apple from '../../assets/img/banners/Apple-Banner.jpg'
import {CarouselContainer, Text} from './Carousel.module.css'
function Carousell() {
  return (
<div className={CarouselContainer}>
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-300px"
          src={samsung}
          alt="First slide"
          />
        <Carousel.Caption className={Text}>
          <h3>Samsung Galaxy</h3>
          <p>Descubre la nueva familia Galaxy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 h-300px"
          src={apple}
          alt="Second slide"
          />
        <Carousel.Caption className={Text}>
          <h3>Productos Apple</h3>
          <p>Think different</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  );
}

export default Carousell;