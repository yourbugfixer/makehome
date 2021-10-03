import React from "react";
import bg from "../assets/images/background/bg-page-title-1.jpg";

function PageTitle({ title }) {
  return (
    <section className="page-title" style={{ backgroundImage: `url(${bg})` }}>
      <div className="auto-container">
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default PageTitle;
