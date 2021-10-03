import React from "react";
import { useData } from "../context/GetData";

function TeamCard() {
  const { team } = useData();

  return (
    <section className="team-section-one">
      <div className="auto-container">
        <div class="sec-title-four">
          <h2>Meet Our Team</h2>
        </div>

        {/*<!--members-->*/}

        <div className="row clearfix">
          {team &&
            team.map((item) => (
              <div className="col-md-4 col-sm-6" key={item.ID}>
                <div className="our-team shadow">
                  <div className="pic">
                    <img src={item.IMAGE} />
                  </div>
                  <h3 className="title">{item.NAME}</h3>
                  <span className="post">{item.DESIGNATION}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default TeamCard;
