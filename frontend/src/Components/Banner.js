import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Banner.css';
function Banner() {
  return (
    <Carousel className="Banner-Container">
      <Carousel.Item interval={6000} className="Carousel-item">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente consectetur cum laborum optio vitae officia eveniet, totam dicta! Quasi saepe dicta numquam. Dolorum et dignissimos fugit maxime, voluptates fuga.
          </p>
        </p>
      </Carousel.Item>
      <Carousel.Item interval={6000} className="Carousel-item">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item interval={6000} className="Carousel-item">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
