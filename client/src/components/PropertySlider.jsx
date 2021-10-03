import React from "react";
import OwlCarousel from "react-owl-carousel";

import Cat1 from "../assets/images/property/categories-1.jpg";
import Cat2 from "../assets/images/property/categories-2.jpg";
import Cat3 from "../assets/images/property/categories-3.jpg";

const config = {
  items: 1,
  navContainer: "#owl-outer-nav",
  navClass: ["owl-arrow owl-arrow-prev", "owl-arrow owl-arrow-next"],
  navText: [
    "<i class='fas fa-chevron-left'></i>&nbspPREV",
    "NEXT&nbsp<i class='fas fa-chevron-right'></i>",
  ],
  stagePadding: 0,
  loop: true,
  margin: 30,
  dots: false,
  nav: false,
  mouseDrag: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
};

function PropertySlider() {
  return (
    <>
      <OwlCarousel className="owl-carousel owl-loaded" {...config}>
        <div class="item">
          <a
            class="product-corporate context-dark"
            href="https://ld-wt73.template-help.com/wt_prod-3844/single-property.html"
            style={{ backgroundImage: `url(${Cat1})` }}
          >
            <div class="product-corporate-inner">
              <div class="product-corporate-caption">
                <h3 class="product-corporate-title">
                  401 Biscayne Boulevard, Miami
                </h3>
                <h4 class="product-corporate-info">3 bedrooms, $240\day</h4>
              </div>
            </div>
          </a>
        </div>

        <div class="item">
          <a
            class="product-corporate context-dark"
            href="https://ld-wt73.template-help.com/wt_prod-3844/single-property.html"
            style={{ backgroundImage: `url(${Cat2})` }}
          >
            <div class="product-corporate-inner">
              <div class="product-corporate-caption">
                <h3 class="product-corporate-title">
                  3895 NW 107th Ave, Doral
                </h3>
                <h4 class="product-corporate-info">2 bedrooms, $130\day</h4>
              </div>
            </div>
          </a>
        </div>

        <div class="item">
          <a
            class="product-corporate context-dark"
            href="https://ld-wt73.template-help.com/wt_prod-3844/single-property.html"
            style={{ backgroundImage: `url(${Cat3})` }}
          >
            <div class="product-corporate-inner">
              <div class="product-corporate-caption">
                <h3 class="product-corporate-title">
                  3782 Broadway St, San Francisco
                </h3>
                <h4 class="product-corporate-info">2 bedrooms, $290\day</h4>
              </div>
            </div>
          </a>
        </div>
      </OwlCarousel>

      <div class="box-2-footer">
        <div class="box-2-footer-inner">
          <h3>Recent Properties</h3>
          <div class="owl-outer-nav" id="owl-outer-nav"></div>
        </div>
      </div>
    </>
  );
}

export default PropertySlider;
