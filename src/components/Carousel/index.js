import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import aguila from "../../assets/animals/aguila.jpg";
import serpiente from "../../assets/animals/serpiente.jpg";
import suricata from "../../assets/animals/suricata.jpg";
import tigre from "../../assets/animals/tigre.jpg";

import "./styles.scss";

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows
      autoPlay
      infiniteLoop
      className="carousel"
      renderThumbs={() => null} // Opcional: deshabilita las miniaturas
    >
      <div className="slide">
        <img src={aguila} alt="Animal 1" />
      </div>
      <div className="slide">
        <img src={suricata} alt="Animal 2" />
      </div>
      <div className="slide">
        <img src={serpiente} alt="Animal 3" />
      </div>
      <div className="slide">
        <img src={tigre} alt="Animal 3" />
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Carousel>
  );
};

export default CarouselComponent;
