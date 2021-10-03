import React from "react";
import { useMediaQuery } from "react-responsive";
import Breadcrum from "../components/Breadcrum";
import { Modal, ModalButton } from "../components/Modal";
import { getRandomColor, createImageFromInitials } from "../../utils/Utility";

function Dashboard() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Breadcrum title="DASHBOARD">
        <ModalButton id="create_modal" className="btn btn-info">
          Add New
        </ModalButton>
      </Breadcrum>

      <div className="col-sm-12 py-2">
        <div className="row d-flex justify-content-between mx-0">
          <div className="col-md-auto col-sm-12 p-0">
            <div className={!isMobile ? "cards admin_container" : "cards p-4"}>
              <div className="card-body text-center p-0">
                <img
                  className="admin_avtar mb-3"
                  src={createImageFromInitials(130, "RR", getRandomColor())}
                  alt="admin"
                />
                <h3>ADMIN NAME</h3>
                <br />
                <p>Email:Admin email</p>
                <p>Password: **********</p>

                <button
                  className="btn btn-info mt-3 px-3 py-2"
                  data-toggle="modal"
                  data-target="#passwordModal"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-8 p-0">
            <div className="col-sm-12">
              <div className="row d-flex justify-content-between mx-0">
                <div className="col-sm-5 cards d-flex align-items-center my-3 my-sm-0">
                  <div className="numbers">"25/10/2000"</div>

                  <div className="iconBox">
                    <i className="fas fa-calendar-alt" />
                  </div>
                </div>
                <div className="col-sm-6 cards d-flex">
                  <div>
                    <div className="numbers">10</div>
                    <div className="cardName">Total result Published</div>
                  </div>

                  <div className="iconBox">
                    <i className="fas fa-clipboard-list" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 cards mt-3 mt-md-4">
              <div className="card-body">admin</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
