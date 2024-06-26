import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import aguila from "../../assets/animals/aguila.jpg";
import serpiente from "../../assets/animals/serpiente.jpg";
import suricata from "../../assets/animals/suricata.jpg";
import tigre from "../../assets/animals/tigre.jpg";

import "./styles.scss";

const images = [
  { src: aguila },
  { src: serpiente },
  { src: suricata },
  { src: tigre },
  // Agrega más imágenes según sea necesario
];

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows
      autoPlay
      infiniteLoop
      className="carousel"
      renderThumbs={() => null} // Opcional: deshabilita las miniaturas
    >
      {images.map((image, index) => (
        <div className="slide" key={index}>
          <img src={image.src} alt={`Animal ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
