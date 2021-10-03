import React from "react";
import PropertySlider from "../../components/PropertySlider";

import CardBg from "../../assets/images/property/bg-shape-1.svg";
import Cat1 from "../../assets/images/property/categories-1.jpg";
import Cat2 from "../../assets/images/property/categories-2.jpg";
import Cat3 from "../../assets/images/property/categories-3.jpg";
import Cat4 from "../../assets/images/property/categories-4.jpg";
import Cat5 from "../../assets/images/property/categories-5.jpg";

import Featured1 from "../../assets/images/property/featured-properties-01.jpg";
import Featured2 from "../../assets/images/property/featured-properties-02.jpg";
import Featured3 from "../../assets/images/property/featured-properties-03.jpg";

function Property() {
  return (
    <>
      {/*<!-- FScreen-->*/}
      <section className="section">
        <div className="range">
          <div className="cell-xl-6_lg box-1-cell height-fill context-dark">
            <div className="box-1-bg-shape">
              <img
                className="box-1-bg-image"
                src={CardBg}
                alt=""
                role="presentation"
              />
            </div>
            <div className="cell-inner box-1-outer">
              <div className="box-1">
                <h2>Find Your Property</h2>
                <form className="rd-form">
                  <div className="row row-x-20 row-20">
                    <div className="col-sm-6 col-lg-12 col-xl-6">
                      <div className="form-wrap form-wrap-validation">
                        <select
                          className="form-input select-filter form-control-has-validation"
                          name="search-property-location"
                        >
                          <option label="Choose Location"></option>
                          <option value="2">Alaska</option>
                          <option value="3">Arizona</option>
                          <option value="4">Arkansas</option>
                          <option value="5">California</option>
                          <option value="6">Colorado</option>
                          <option value="7">Connecticut</option>
                          <option value="8">Delaware</option>
                          <option value="9">Florida</option>
                        </select>
                        <span className="form-validation"></span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-wrap form-wrap-validation">
                        <select
                          className="form-input select-filter form-control-has-validation form-control-last-child"
                          name="search-property-type"
                        >
                          <option label="Property Type"></option>
                          <option value="Apartment">Apartment</option>
                          <option value="House">House</option>
                          <option value="Lot">Lot</option>
                        </select>
                        <span className="form-validation"></span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-6 col-xl-4">
                      <div className="form-wrap form-wrap-validation">
                        <select
                          className="form-input select-filter form-control-has-validation form-control-last-child"
                          name="search-property-status"
                        >
                          <option label="Property Status"></option>
                          <option value="For Sale">For Sale</option>
                          <option value="For Rent">For Rent</option>
                        </select>
                        <span className="form-validation"></span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-6 col-xl-4">
                      <div className="form-wrap form-wrap-validation">
                        <select
                          className="form-input select-filter form-control-has-validation form-control-last-child"
                          name="search-property-bathroom"
                        >
                          <option label="Min Baths"></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                        <span className="form-validation"></span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-lg-6 col-xl-4">
                      <div className="form-wrap form-wrap-validation">
                        <select
                          className="form-input select-filter form-control-has-validation form-control-last-child"
                          name="search-property-bedrooms"
                        >
                          <option label="Min Bed"></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </select>
                        <span className="form-validation"></span>
                      </div>
                    </div>
                  </div>
                  <div className="rd-range-outer">
                    <p className="rd-range-caption">Price Range ($)</p>
                    {/*<!-- RD Range-->*/}
                    <div
                      className="rd-range hasTooltip"
                      data-min="50"
                      data-max="10000"
                      data-start="[50, 10000]"
                      data-step="10"
                      data-tooltip="true"
                      data-min-diff="100"
                    >
                      <div className="rd-range__wrap">
                        <div className="rd-range__pointer rd-range__pointer-1">
                          <div className="rd-range__pointer-tooltip">50</div>
                        </div>
                        <div className="rd-range__pointer rd-range__pointer-2">
                          <div className="rd-range__pointer-tooltip">10000</div>
                        </div>
                        <div className="rd-range__line"></div>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="rd-range-outer">
                    <p className="rd-range-caption">Area (Sq Ft)</p>
                    {/*<!-- RD Range-->*/}
                    <div
                      className="rd-range hasTooltip"
                      data-min="70"
                      data-max="20000"
                      data-start="[70, 20000]"
                      data-step="10"
                      data-tooltip="true"
                      data-min-diff="100"
                    >
                      <div className="rd-range__wrap">
                        <div className="rd-range__pointer rd-range__pointer-1">
                          <div className="rd-range__pointer-tooltip">70</div>
                        </div>
                        <div className="rd-range__pointer rd-range__pointer-2">
                          <div className="rd-range__pointer-tooltip">20000</div>
                        </div>
                        <div className="rd-range__line"></div>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="layout-5">
                    <div className="layout-5-item">
                      <a className="button button-secondary-outline" href="#">
                        Search
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="cell-xl-6_sm height-fill">
            <div class="box-2">
              <PropertySlider />
            </div>
          </div>
        </div>
      </section>

      <section class="section section-lg bg-default">
        <div class="container">
          <div class="row row-30">
            <div class="col-md-6 col-lg-4">
              <article class="box-modern">
                <span class="icon box-modern-icon fas fa-map-marker-alt"></span>
                <div class="box-modern-main">
                  <h4 class="box-modern-title">Various Locations</h4>
                  <p>
                    We have lots of properties in various locations available
                    for purchase.
                  </p>
                </div>
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              <article class="box-modern">
                <span class="icon box-modern-icon fas fa-wallet"></span>
                <div class="box-modern-main">
                  <h4 class="box-modern-title">No Commission</h4>
                  <p>
                    Opportunity to acquire a quality apartment for rent without
                    having to pay any commission.
                  </p>
                </div>
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              <article class="box-modern">
                <span class="icon box-modern-icon fas fa-search"></span>
                <div class="box-modern-main">
                  <h4 class="box-modern-title">View Apartments</h4>
                  <p>
                    View apartment listings with photos, HD videos, virtual
                    tours, 3D floor plans etc.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}

      <section class="section section-lg bg-gray-12">
        <div class="container">
          <div class="layout-4">
            <h2 class="heading-decoration-1">
              <span class="heading-inner">Featured Properties</span>
            </h2>
            <div class="layout-4-item">
              <ul class="list-inline-bordered heading-7">
                <li>
                  <a href="https://ld-wt73.template-help.com/wt_prod-3844/real-estate-1.html#">
                    For Rent
                  </a>
                </li>
                <li>
                  <a href="https://ld-wt73.template-help.com/wt_prod-3844/real-estate-1.html#">
                    For Sale
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row row-50">
            <div className="col-md-6 col-lg-4 p-4">
              {/* Product Classic */}

              <article className="product-classic">
                <div className="product-classic-media">
                  <div className="owl-carousel owl-loaded">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <div className="owl-item active">
                          <img src={Featured1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-classic-price">
                    <span>$5000\mo</span>
                  </div>
                </div>
                <h4 className="product-classic-title">
                  <a href="https://ld-wt73.template-help.com/wt_prod-3844/single-property.html">
                    401 Biscayne Boulevard, Miami
                  </a>
                </h4>
                <div class="product-classic-divider"></div>
                <ul class="product-classic-list">
                  <li>
                    <span className="icon fas fa-vector-square"></span>
                    <span>480 Sq Ft</span>
                  </li>
                  <li>
                    <span className="icon fas fa-bath"></span>
                    <span>&nbsp;2 Bathrooms</span>
                  </li>
                  <li>
                    <span className="icon fas fa-bed-alt"></span>
                    <span>2 Bedrooms</span>
                  </li>
                  <li>
                    <span className="icon far fa-car-garage"></span>
                    <span>1 Garage</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="col-md-6 col-lg-4 p-4">
              {/* Product Classic */}

              <article className="product-classic">
                <div className="product-classic-media">
                  <div className="owl-carousel owl-loaded">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <div className="owl-item active">
                          <img src={Featured2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-classic-price">
                    <span>$5000\mo</span>
                  </div>
                </div>
                <h4 className="product-classic-title">
                  <a href="https://ld-wt73.template-help.com/wt_prod-3844/single-property.html">
                    401 Biscayne Boulevard, Miami
                  </a>
                </h4>
                <div class="product-classic-divider"></div>
                <ul class="product-classic-list">
                  <li>
                    <span className="icon fas fa-vector-square"></span>
                    <span>480 Sq Ft</span>
                  </li>
                  <li>
                    <span className="icon fas fa-bath"></span>
                    <span>&nbsp;2 Bathrooms</span>
                  </li>
                  <li>
                    <span className="icon fas fa-bed-alt"></span>
                    <span>2 Bedrooms</span>
                  </li>
                  <li>
                    <span className="icon fas fa-car-garage"></span>
                    <span>1 Garage</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="col-md-6 col-lg-4 p-4">
              {/* Product Classic */}

              <article className="product-classic">
                <div className="product-classic-media">
                  <div className="owl-carousel owl-loaded">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <div className="owl-item active">
                          <img src={Featured3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-classic-price">
                    <span>$5000\mo</span>
                  </div>
                </div>
                <h4 className="product-classic-title">
                  <a href="https://ld-wt73.template-help.com/wt_prod-3844/single-property.html">
                    401 Biscayne Boulevard, Miami
                  </a>
                </h4>
                <div class="product-classic-divider"></div>
                <ul class="product-classic-list">
                  <li>
                    <span className="icon fas fa-vector-square"></span>
                    <span>480 Sq Ft</span>
                  </li>
                  <li>
                    <span className="icon fas fa-bath"></span>
                    <span>&nbsp;2 Bathrooms</span>
                  </li>
                  <li>
                    <span className="icon fas fa-bed-alt"></span>
                    <span>2 Bedrooms</span>
                  </li>
                  <li>
                    <span className="icon fas fa-car-garage"></span>
                    <span>1 Garage</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Categories*/}
      <section class="section section-lg bg-default">
        <div class="container">
          <h2 class="heading-decoration-1">
            <span class="heading-inner">Categories</span>
          </h2>
          <div class="row row-30">
            <div class="col-md-6 col-lg-7">
              {/* Box Categories*/}
              <article class="box-category-outer">
                <a class="box-category context-dark" href="#">
                  <div
                    class="box-category-image-outer"
                    style={{ backgroundImage: `url(${Cat1})` }}
                  ></div>
                  <div class="box-category-caption">
                    <div class="box-category-caption-inner">
                      <h3 class="box-category-title">Studio Apartments</h3>
                      <p class="box-category-subtitle">8 Properties</p>
                    </div>
                  </div>
                </a>
              </article>
            </div>
            <div class="col-md-6 col-lg-5">
              {/* Box Categories*/}
              <article class="box-category-outer">
                <a class="box-category context-dark" href="#">
                  <div
                    class="box-category-image-outer"
                    style={{ backgroundImage: `url(${Cat2})` }}
                  ></div>
                  <div class="box-category-caption">
                    <div class="box-category-caption-inner">
                      <h3 class="box-category-title">Swimming Pool</h3>
                      <p class="box-category-subtitle">8 Properties</p>
                    </div>
                  </div>
                </a>
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              {/* Box Categories*/}
              <article class="box-category-outer">
                <a class="box-category context-dark" href="#">
                  <div
                    class="box-category-image-outer"
                    style={{ backgroundImage: `url(${Cat3})` }}
                  ></div>
                  <div class="box-category-caption">
                    <div class="box-category-caption-inner">
                      <h3 class="box-category-title">Luxury Houses</h3>
                      <p class="box-category-subtitle">8 Properties</p>
                    </div>
                  </div>
                </a>
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              {/* Box Categories*/}
              <article class="box-category-outer">
                <a class="box-category context-dark" href="#">
                  <div
                    class="box-category-image-outer"
                    style={{ backgroundImage: `url(${Cat4})` }}
                  ></div>
                  <div class="box-category-caption">
                    <div class="box-category-caption-inner">
                      <h3 class="box-category-title">Extra Bedroom</h3>
                      <p class="box-category-subtitle">8 Properties</p>
                    </div>
                  </div>
                </a>
              </article>
            </div>
            <div class="col-md-6 col-lg-4">
              {/* Box Categories*/}
              <article class="box-category-outer">
                <a class="box-category context-dark" href="#">
                  <div
                    class="box-category-image-outer"
                    style={{ backgroundImage: `url(${Cat5})` }}
                  ></div>
                  <div class="box-category-caption">
                    <div class="box-category-caption-inner">
                      <h3 class="box-category-title">Cozy Houses</h3>
                      <p class="box-category-subtitle">8 Properties</p>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Categories*/}
    </>
  );
}

export default Property;
