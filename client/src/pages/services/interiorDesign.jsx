import React from "react";
import PageTitle from "../../components/PageTitle";
import ActionBanner from "../../components/ActionBanner";
import { interiorService } from "../../utils/Data";
import { ServiceCard } from "../../components/serviceCard";
import { Link } from "react-router-dom";

function interiorDesign() {
  return (
    <>
      {/* <!--Page Title--> */}
      <PageTitle title="Interior Design" />

      {/* <!--Page Info--> */}
      <section class="page-info">
        <div class="auto-container clearfix">
          <div class="pull-left">
            <h2>Interior-Design Services</h2>
          </div>
          <div class="pull-right">
            <ul class="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Services</span>
              </li>
              <li>Interior-Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!--Services Section--> */}
      <section class="services-section">
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Service Block--> */}

            {interiorService &&
              interiorService.map((item) => (
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

      {/* <!--call-to-action--> */}
      <ActionBanner />
    </>
  );
}

export default interiorDesign;
