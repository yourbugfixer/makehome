import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { toggle } from "./NavBar";

function Sidenav() {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <section class="main_sidebar">
      <header className="Sidebar-logo">
        <span>YBF</span>

        {isMobile && (
          <div class="sidebar_close_btn">
            <button class="navbar-toggler" onClick={toggle}>
              <i class="fas fa-times"></i>
            </button>
          </div>
        )}
      </header>

      <h5 className="Sidebar_navTitle">APP</h5>

      <ul className="Sidebar_nav">
        <li className="link-wrapper LinksGroup_headerLink">
          <NavLink to="/" onClick={toggle} activeClassName="active" exact>
            <span class="link_icon">
              <i class="fas fa-home-lg-alt"></i>
            </span>
            <span class="link_title">Dashboard</span>
          </NavLink>
        </li>
        <li className="link-wrapper LinksGroup_headerLink">
          <NavLink to="/message" onClick={toggle} activeClassName="active">
            <span class="link_icon">
              <i class="fad fa-comments-alt"></i>
            </span>
            <span class="link_title">Messages</span>
          </NavLink>
        </li>
      </ul>

      <h5 className="Sidebar_navTitle">INTERIOR DESIGN</h5>

      <ul className="Sidebar_nav">
        <li className="link-wrapper LinksGroup_headerLink">
          <NavLink to="/projects" onClick={toggle} activeClassName="active">
            <span class="link_icon">
              <i class="fad fa-tasks"></i>
            </span>
            <span class="link_title">Projects</span>
          </NavLink>
        </li>
        <li className="link-wrapper LinksGroup_headerLink">
          <NavLink to="/team" onClick={toggle} activeClassName="active">
            <span class="link_icon">
              <i class="fad fa-users"></i>
            </span>
            <span class="link_title">Team Members</span>
          </NavLink>
        </li>
      </ul>

      <h5 className="Sidebar_navTitle">REAL ESTATE</h5>

      <ul className="Sidebar_nav">
        <li className="link-wrapper LinksGroup_headerLink">
          <NavLink to="/properties" onClick={toggle} activeClassName="active">
            <span class="link_icon">
              <i class="fad fa-landmark"></i>
            </span>
            <span class="link_title">Properties</span>
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Sidenav;
