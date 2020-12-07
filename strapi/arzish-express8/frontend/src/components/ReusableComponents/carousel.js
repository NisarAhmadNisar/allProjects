import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      data-aos="zoom-in"
      data-aos-delay="200"
      // prevIcon={false}
      // nextIcon={false}
      // indicators={false}
    >
      <Carousel.Item>
        <picture>
          <source srcset="img/home1.webp" type="image/webp" />
          <img src="img/home.jpg" alt="" className="img-carousel" />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source srcset="img/home2.webp" type="image/webp" />
          <img src="img/home1.jpg" alt="" className="img-carousel" />
        </picture>
      </Carousel.Item>
      <Carousel.Item>
        <picture>
          <source srcset="img/home3.webp" type="image/webp" />
          <img src="img/home1.jpg" alt="" className="img-carousel" />
        </picture>
      </Carousel.Item>
    </Carousel>
  );
}
