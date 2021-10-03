import React from "react";
import Bannerbg from "../assets/images/background/image-1.jpg";

function ActionBanner() {
  return (
    <section
      class="call-to-action"
      style={{ backgroundImage: `url(${Bannerbg})` }}
    >
      <div class="auto-container">
        <div class="row">
          <div class="text">Join with Decorators and</div>
          <h2>Now Make Your Home More Lovely!</h2>
          <div>
            <a class="theme-btn btn-style-one" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionBanner;
