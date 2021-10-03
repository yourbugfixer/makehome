import React from "react";
import OwlCarousel from "react-owl-carousel";
import image1 from "../assets/images/main-slider/image-1.jpg";
import image2 from "../assets/images/main-slider/image-2.jpg";
import image3 from "../assets/images/main-slider/image-3.jpg";

const config = {
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  mouseDrag: false,
  autoplay: true,
  animateOut: "slideOutLeft",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

function Slider() {
  return (
    <header>
      <OwlCarousel className="owl-carousel owl-theme" {...config}>
        <div className="item">
          <img src={image1} alt="images not found" />
          <div className="cover">
            <div className="container">
              <div className="header-content">
                <div className="line"></div>
                <h2>Teimagine Digital Experience with</h2>
                <h1>Start-ups and solutions</h1>
                <h4>
                  We help entrepreneurs, start-ups and enterprises shape their
                  ideas into products
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image2} alt="images not found" />
          <div className="cover">
            <div className="container">
              <div className="header-content">
                <div className="line"></div>
                <h2>Reimagine Digital Experience with</h2>
                <h1>Intelligent solutions</h1>
                <h4>
                  We help entrepreneurs, start-ups and enterprises shape their
                  ideas into products
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={image3} alt="images not found" />
          <div className="cover">
            <div className="container">
              <div className="header-content">
                <div className="line"></div>
                <h2>Peimagine Digital Experience with</h2>
                <h1>Intelligent Solutions</h1>
                <h4>
                  We help entrepreneurs, start-ups and enterprises shape their
                  ideas into products
                </h4>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </header>
  );
}

export default Slider;
