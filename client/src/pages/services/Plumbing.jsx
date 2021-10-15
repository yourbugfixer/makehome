import React from "react";
import PageTitle from "../../components/PageTitle";
import ActionBanner from "../../components/ActionBanner";
import { ServiceCard, OtherCard } from "../../components/serviceCard";
import { plumbingService, otherService } from "../../utils/Data";
import { Link } from "react-router-dom";

function Plumbing() {
  return (
    <>
      {/* <!--Page Title--> */}
      <PageTitle title="Sanitary" />

      {/* <!--Page Info--> */}
      <section class="page-info">
        <div class="auto-container clearfix">
          <div class="pull-left">
            <h2>Sanitary Services</h2>
          </div>
          <div class="pull-right">
            <ul class="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Services</span>
              </li>
              <li>Sanitary</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!--Services Section--> */}
      <section class="services-section">
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Service Block--> */}
            {plumbingService &&
              plumbingService.map((item) => (
                <ServiceCard
                  img={item.img}
                  alt={item.alt}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
          </div>
        </div>
      </section>

      {/* <!-- other services --> */}
      <section class="services-section layout-services-grid">
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Section Title--> */}
            <div class="sec-title-four">
              <h2>Other Services</h2>
            </div>

            <div className="services-container inview-cascade-fade-up inview">
              {/* <!--Service Block--> */}

              {otherService &&
                otherService.map((item) => (
                  <OtherCard img={item.img} alt={item.alt} title={item.title} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!--call-to-action--> */}
      <ActionBanner />
    </>
  );
}

export default Plumbing;
