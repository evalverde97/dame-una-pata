import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aguila from "../../assets/animals/aguila.jpg";
import serpiente from "../../assets/animals/serpiente.jpg";
import suricata from "../../assets/animals/suricata.jpg";
import "./index.scss";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [aguila, serpiente, suricata];

  return (
    <div className="banner">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
