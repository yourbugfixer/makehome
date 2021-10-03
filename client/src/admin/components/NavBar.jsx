import React from "react";
import { useMediaQuery } from "react-responsive";

var isMobile = "";
function NavBar() {
  isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <nav class="navbar ybf_navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <div className="d-flex">
          <button class="btn btn-info btn-sm me-2 me-md-0 ">Logout</button>
          {isMobile && (
            <button class="navbar-toggler" onClick={toggle}>
              <i class="fas fa-bars"></i>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export const toggle = () => {
  if (isMobile) {
    const sidebar = document.querySelector(".main_sidebar");
    var main = document.querySelector("body");
    main.classList.toggle("hide_overflow");
    sidebar.classList.toggle("sidebar_show");
  }
};

export default NavBar;
