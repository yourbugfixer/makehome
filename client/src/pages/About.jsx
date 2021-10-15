import React from "react";
import PageTitle from "../components/PageTitle";
import serviceBg from "../assets/images/background/image-4.jpg";
import signImg from "../assets/images/resource/signature.png";
import videoImg from "../assets/images/resource/featured-image-1.jpg";
import TeamCard from "../components/TeamCard";
import ActionBanner from "../components/ActionBanner";

import people1 from "../assets/images/about/about-1.jpeg";
import people2 from "../assets/images/about/about-2.jpeg";
import people3 from "../assets/images/about/about-3.jpeg";

function About() {
  return (
    <>
      {/* <!--Page Title--> */}
      <PageTitle title="Know About Us" />

      {/* <!--Page Info--> */}
      <section class="page-info">
        <div class="auto-container clearfix">
          <div class="pull-left">
            <h2>About Us</h2>
          </div>
          <div class="pull-right">
            <ul class="bread-crumb clearfix">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>
                <a href="index-2.html">Pages</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!--About Us Section--> */}
      <section class="about-us-section">
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Text Column --> */}
            <div class="column text-column col-md-6 col-sm-12 col-xs-12">
              <h2 className="">
                We Have The Right Products to Fit Your Needs and Budget &nbsp;
                <a href="#">Purchase - Make Home</a>
              </h2>
              <div class="inner-box">
                <div class="text">
                  Explain to you how all this mistaken idea of denouncing ut
                  pleasures work expond praising pain was born and will give you
                  can complete teaching design accont sed the system, and
                  expound the actual teachngs mistake interiors of the great
                  design explorer of the truth, the master-builders design
                  praising of human happiness one seds rejects, dislikes, or
                  avoids pleasures itself
                </div>

              </div>
            </div>

            {/* <!--Column--> */}
            <div class="column image-column col-md-6 col-sm-12 col-xs-12">
              <article
                class="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="row">
                  <div className="col-md-6">
                    <img className="ab-image-sm" src={people2}></img>
                    <img className="ab-image-sm" src={people3}></img>
                  </div>
                  <div className="col-md-6">
                    <img className="ab-image-lg" src={people1}></img>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* <!--Our Services--> */}
          <div class="our-services">
            <div class="row clearfix">
              {/* <!--service-block-one--> */}
              <div class="service-block-one col-md-4 col-sm-6 col-xs-12">
                <div
                  class="inner-box wow fadeIn"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  {/* <!--icon-block--> */}
                  <div class="icon-box">
                    <span class="flaticon-cursor"></span>
                  </div>
                  <h3>We are Professional</h3>
                  <div class="category">
                    <span>Designers</span>
                  </div>
                  <div class="text">
                    How all this mistakens idea of denouncing pleasures and
                    praising pain was born and I will give you a completed by
                    account of the system, and expound.
                  </div>
                </div>
              </div>

              {/* <!--service-block-one--> */}
              <div class="service-block-one col-md-4 col-sm-6 col-xs-12">
                <div
                  class="inner-box wow fadeIn"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  {/* <!--icon-block--> */}
                  <div class="icon-box">
                    <span class="flaticon-compass"></span>
                  </div>
                  <h3>We are Expert</h3>
                  <div class="category">
                    <span>Interiors</span>
                  </div>
                  <div class="text">
                    Denouncing pleasures and praisings pain was born work will
                    give you a complete seds account of the system, and actual
                    master-builder of human happiness.
                  </div>
                </div>
              </div>

              {/* <!--service-block-one--> */}
              <div class="service-block-one col-md-4 col-sm-6 col-xs-12">
                <div
                  class="inner-box wow fadeIn"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  {/* <!--icon-block--> */}
                  <div class="icon-box">
                    <span class="flaticon-correct"></span>
                  </div>
                  <h3>We are Trusted</h3>
                  <div class="category">
                    <span>Team Members</span>
                  </div>
                  <div class="text">
                    Idea of denouncing pleasure and praisings pain was born and
                    I will give you a complete account of the system and expound
                    the actual great explorer of the truth.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--best-service-two--> */}
      <section
        class="best-service-two"
        style={{ backgroundImage: `url(${serviceBg})` }}
      >
        <div class="auto-container">
          {/* <!--sec-title--> */}
          <div class="sec-title-four">
            <h2>Why We Are Best</h2>
          </div>

          <div class="row clearfix">
            {/* <!--service-block-two--> */}
            <div class="service-block-three col-md-4 col-sm-6 col-xs-12">
              {/* <!--inner-box--> */}
              <a
                href="service-single.html"
                class="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="icon-box">
                  <span class="flaticon-house"></span>
                </div>
                <h3>25 years of Experience</h3>
              </a>
            </div>

            {/* <!--service-block-two--> */}
            <div class="service-block-three col-md-4 col-sm-6 col-xs-12">
              {/* <!--inner-box--> */}
              <a
                href="service-single.html"
                class="inner-box wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div class="icon-box">
                  <span class="flaticon-users"></span>
                </div>
                <h3>Exclusive Partnership</h3>
              </a>
            </div>

            {/* <!--service-block-two--> */}
            <div class="service-block-three col-md-4 col-sm-6 col-xs-12">
              {/* <!--inner-box--> */}
              <a
                href="service-single.html"
                class="inner-box wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div class="icon-box">
                  <span class="flaticon-bright-lightbulb"></span>
                </div>
                <h3>Innovative Designers</h3>
              </a>
            </div>

            {/* <!--service-block-two--> */}
            <div class="service-block-three col-md-4 col-sm-6 col-xs-12">
              {/* <!--inner-box--> */}
              <a
                href="service-single.html"
                class="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="icon-box">
                  <span class="flaticon-compass"></span>
                </div>
                <h3>Best Quality Products</h3>
              </a>
            </div>

            {/* <!--service-block-two--> */}
            <div class="service-block-three col-md-4 col-sm-6 col-xs-12">
              {/* <!--inner-box--> */}
              <a
                href="service-single.html"
                class="inner-box wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div class="icon-box">
                  <span class="flaticon-like-1"></span>
                </div>
                <h3>Business Opportunities</h3>
              </a>
            </div>

            {/* <!--service-block-two--> */}
            <div class="service-block-three col-md-4 col-sm-6 col-xs-12">
              {/* <!--inner-box--> */}
              <a
                href="service-single.html"
                class="inner-box wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div class="icon-box">
                  <span class="flaticon-stopwatch"></span>
                </div>
                <h3>24/7 Online Support</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Team Section--> */}
      <TeamCard />

      <ActionBanner />
    </>
  );
}

export default About;
