import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../../assets/Sliders/Levis.webp";
import img2 from "../../../assets/Sliders/2.jpg";
import img3 from "../../../assets/Sliders/3.jpg";
import img4 from "../../../assets/Sliders/4.jpg";
import img5 from "../../../assets/Sliders/KRsets.webp";
import img6 from "../../../assets/Sliders/6.webp";
import img7 from "../../../assets/Sliders/Slips.jpg";
import img8 from "../../../assets/Sliders/7.webp";
import img9 from "../../../assets/Sliders/9.webp";

function Slider() {
  return (
    <div className="slider__container">
      <>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img4} alt="Fourth slide" />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img5} alt="Fifth slide" />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img6} alt="Sixth slide" />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img7} alt="Seventh slide" />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img8} alt="Eighth slide" />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img9} alt="Ninth slide" />
          </Carousel.Item>
        </Carousel>
      </>
    </div>
  );
}

export default Slider;
