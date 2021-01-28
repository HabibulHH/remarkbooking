import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./RoomItem.css";
const styles = {
  maxWidth: "300px",
  height: "auto",
};

const SimpleSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(props);
  return (
    <Slider {...settings}>
      <div>
        <img
          className="d-block img-fluid"
          src={props.urls[0]}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="d-block img-fluid"
          src={props.urls[1] || props.urls[0]}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="d-block img-fluid img-cls"
          src={props.urls[2] || props.urls[0]}
          alt="First slide"
        />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
