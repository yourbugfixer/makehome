import React from "react";

function Breadcrum({ title, className, children }) {
  const cname = `ybf_title${className ? " " + className : ""}`;
  return (
    <div className={cname}>
      <h3 className="page_title">{title}</h3>
      <div className="action_buttons">{children}</div>
    </div>
  );
}

export default Breadcrum;
