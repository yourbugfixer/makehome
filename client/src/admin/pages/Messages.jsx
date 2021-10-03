import React, { useState, useEffect } from "react";
import Breadcrum from "../components/Breadcrum";
import Table from "../components/DataTable";
import { api } from "../../utils/Utility";
import Swal from "sweetalert2";

function Messages() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamGlobal = await api.get("/contact");

      setMessage(teamGlobal.data.data);
    };

    fetchData();
  }, []);

  const header = ["Name", "Subject", "Email", "Phone", "Message", "Status"];

  function handleUpdate(message_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to mark this soolved !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, mark it!",
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .patch("/contact", {
            contact_status: "Solved",
            message_id: message_id,
          })
          .then((res) => {
            if (res.data.success === 1) {
              setMessage(res.data.data);
            }

            Swal.fire({
              position: "top-end",
              text: res.data.message,
              icon: "success",
              showConfirmButton: false,
              toast: true,
              timer: 2000,
            });
          });
      }
    });
  }

  return (
    <>
      <div className="col-sm-11 mx-auto">
        <Breadcrum title="MESSAGES"></Breadcrum>

        <div className="ybf_card ">
          <div className="table-responsive custom-table-responsive">
            <Table id="message_table" header={header}>
              {message &&
                message.map((item) => (
                  <tr key={item.ID}>
                    <td>{item.NAME}</td>
                    <td>{item.EMAIL}</td>
                    <td>{item.PHONE}</td>
                    <td>{item.SUBJECT}</td>
                    <td>{item.MESSAGE}</td>

                    <td>
                      {item.STATUS === "Active" ? (
                        <span
                          className="badge active"
                          onClick={() => handleUpdate(item.ID)}
                        >
                          {item.STATUS}
                        </span>
                      ) : (
                        <span className="badge solved">solved</span>
                      )}
                    </td>
                  </tr>
                ))}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
