import React from "react";
import bg from "../assets/images/background/footer-bg.jpg";

function Footer() {
  return (
    <footer class="main-footer" style={{ backgroundImage: `url(${bg})` }}>
      <div class="footer-bottom">
        <div class="auto-container">
          <div class="clearfix">
            <div class="text-center">
              <div class="copyright">
                Copyrights &copy; 2021 All Rights Reserved by &ensp;
                <a
                  target="_blank"
                  href="https://websitename.com"
                  class="styled-font author-name"
                >
                  website Name
                </a>
                <div class="clearfix"></div>
                Built by: &nbsp;
                <a target="-blank" href="https://wwww.yourbugfixers.com" className="styled-font text-white-50">yourbugfixers.com</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
