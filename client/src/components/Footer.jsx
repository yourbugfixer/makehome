import React from "react";
import bg from "../assets/images/background/footer-bg.jpg";

function Footer() {
  return (
    <footer class="main-footer" style={{ backgroundImage: `url(${bg})` }}>
      <div class="footer-bottom">
        <div class="auto-container">
          <div class="clearfix">
            <div class="pull-left">
              <div class="copyright">
                Copyrights &copy; 2021 All Rights Reserved by &ensp;
                <a
                  target="_blank"
                  href="https://yourbugfixers.com"
                  class="styled-font author-name"
                >
                  yourbugfixers
                </a>
              </div>
            </div>
            <div class="pull-right">
              <ul class="footer-nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
