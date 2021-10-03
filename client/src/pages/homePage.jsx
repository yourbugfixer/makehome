import React from "react";
import Slider from "../components/Slider";
import serviceBg from "../assets/services.webp";
import block2 from "../assets/images/resource/service-block-two-bg.jpg";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";
import { bestService } from "../utils/Data";
import ActionBanner from "../components/ActionBanner";

function homePage() {
  return (
    <>
      <Slider />

      {/* <--------------- welcome-section -----------------> */}
      <section className="welcome-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* <!--welcome-column--> */}
            <div className="col-md-6 col-sm-12 col-xs-12 welcome-column">
              {/* <!--inner-content--> */}
              <div
                className="inner-content wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <h2>Welcome to Decorators</h2>
                <h3>
                  We Have The Right Products to Fit Your Needs and Budget
                  <span>Purchase - Decorators.</span>
                </h3>

                <div className="text">
                  Explain to you how all this mistaken idea of denouncing ut
                  pleasures work praising pain was born and will give you can
                  complete design account sed the system, and expound the actual
                  teachngs interiors of the great design explorer of the truth,
                  the master-builders design of human happiness one seds
                  rejects, dislikes, or avoids pleasures itself.
                </div>
                <figure className="signature">
                  <img src="images/icons/signature.png" alt="" />
                </figure>

                {/* <!--author-title--> */}
                <div className="author-title">
                  <div className="author-info">
                    William Shocks, <span>Founder</span>
                  </div>
                  <div className="author-designation">Decorators.</div>
                </div>
              </div>
            </div>

            {/* <!--service-column--> */}
            <div className="col-md-6 col-sm-12 col-xs-12 service-column">
              {/* <!--service-block-one--> */}
              <div className="service-block-one">
                <div className="inner-box">
                  {/* <!--icon-block--> */}
                  <div className="icon-box">
                    <span className="flaticon-avatar-1"></span>
                  </div>
                  <h3>We are Professional</h3>
                  <div className="category">
                    <span>Designers</span>
                  </div>
                  <div className="text">
                    How all this mistakens idea of denouncing pleasures and
                    praising pain was born and I will give you a completed by
                    account of the system, and expound.
                  </div>
                </div>
              </div>

              {/* <!--service-block-one--> */}
              <div className="service-block-one">
                <div className="inner-box">
                  {/* <!--icon-block--> */}
                  <div className="icon-box">
                    <span className="flaticon-correct"></span>
                  </div>
                  <h3>We are Trusted</h3>
                  <div className="category">
                    <span>Team Members</span>
                  </div>
                  <div className="text">
                    Idea of denouncing pleasure and praisings pain was born and
                    I will give you a complete account of the system and expound
                    the actual great explorer of the truth.
                  </div>
                </div>
              </div>

              {/* <!--service-block-one--> */}
              <div className="service-block-one">
                <div className="inner-box">
                  {/* <!--icon-block--> */}
                  <div className="icon-box">
                    <span className="flaticon-compass"></span>
                  </div>
                  <h3>We are Expert</h3>
                  <div className="category">
                    <span>Interiors</span>
                  </div>
                  <div className="text">
                    Denouncing pleasures and praisings pain was born work will
                    give you a complete seds account of the system, and actual
                    master-builder of human happiness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------- services section ----------> */}

      <section className="ftco-section ftco-services-section">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section text-center mb-5 aos-init aos-animate"
              data-aos="fade-up"
            >
              <span className="subheading">What We Do</span>
              <h2 className="mb-4">Services</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6">
              <div
                className="services d-flex active aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="icon">
                  <span>
                    <i className="fas fa-user-hard-hat"></i>
                  </span>
                </div>
                <div className="text">
                  <h2>Interior Designing</h2>
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind.
                  </p>
                  <p>
                    <Link to="/services/interior-design" className="btn-custom">
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>

              <div
                className="services d-flex active-2 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="icon">
                  <span className="flaticon-house-1"></span>
                </div>
                <div className="text">
                  <h2>Sanitary Work</h2>
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind.
                  </p>
                  <p>
                    <Link to="/services/plumbing" className="btn-custom">
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>

              <div
                className="services active d-flex aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <div className="icon">
                  <span className="flaticon-engineer"></span>
                </div>
                <div className="text">
                  <h2>Real Estate Services</h2>
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind.
                  </p>
                  <p>
                    <Link to="/property" className="btn-custom">
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch">
              <div
                className="img w-100"
                style={{
                  backgroundImage: `url(${serviceBg})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* <----------- best-service-section ----------> */}

      <section className="best-service-section">
        <div className="auto-container">
          {/* <!--sec-title--> */}
          <div className="sec-title clearfix">
            <h2 className="pull-left">Our Best Services</h2>
          </div>

          <div className="row clearfix">
            {/* <!--service-block-two--> */}

            {bestService &&
              bestService.map((item) => (
                <div className="service-block-two col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  {/* <!--inner-box--> */}
                  <div
                    className="inner-box wow fadeIn"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${block2})` }}
                    ></div>
                    {/* <!--icon-box--> */}
                    <div className="icon-box">
                      <i className={item.icon}></i>
                    </div>

                    <h3>{item.title}</h3>
                    <div className="text">{item.desc}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* <--------------- Our Characteristics -----------------> */}
      <ActionBanner />

      {/* <------------------ Team Section ------------------> */}
      <TeamCard />
    </>
  );
}

export default homePage;
