import React from "react";

export function ServiceCard({ img, alt = "", title, desc }) {
  return (
    <div class="default-services-block col-md-4 col-sm-6 col-xs-12">
      <div class="inner-box">
        <figure class="image-box">
          <img src={img} alt={alt} />
        </figure>
        <div class="lower-content">
          <h3>{title}</h3>
          <div class="text">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export function OtherCard({ img, title, alt = "" }) {
  return (
    <div className="service-col" style={{ transitionDelay: "150ms;" }}>
      <div className="image-wrapper">
        <img src={img} alt={alt} className="image-wrapper-item" />
      </div>
      <p className="service-content">
        <strong>{title}</strong>
      </p>
    </div>
  );
}
