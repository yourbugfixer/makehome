import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Breadcrum from "../components/Breadcrum";
import Table from "../components/DataTable";
import { Modal, ModalButton } from "../components/Modal";
import { InputCol, Button } from "../../utils/formControls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../utils/Utility";
import { teamSchema, classes } from "../../utils/Validation";

function Team() {
  const [image, setImage] = useState(null);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamGlobal = await api.get("/team");

      setTeam(teamGlobal.data.data);
    };

    fetchData();
  }, [team]);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(teamSchema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("employee_name", data.employee_name);
    formData.append("employee_designation", data.employee_designation);
    formData.append("employee_image", data.employee_image[0]);
    api
      .post("/team", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success === 1) {
          reset();
          setImage(null);
          setTeam(res.data.data);
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
  };

  function handleChange(event) {
    var ext = ["image/jpeg", "image/jpg", "image/png"];
    if (ext.indexOf(event.target.files[0].type) > -1) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }
  function handleDelete(employee_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/team/${employee_id}`).then((res) => {
          if (res.data.success === 1) {
            setTeam(res.data.data);
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
  const project_header = ["Name", "Designation", "Image", "Delete"];

  return (
    <section>
      <div className="col-sm-11 mx-auto">
        <Breadcrum title="Team">
          <ModalButton id="add_member" className="btn btn-info">
            Add Employee
          </ModalButton>
        </Breadcrum>

        <div className="ybf_card ">
          <div className="table-responsive custom-table-responsive">
            <Table header={project_header}>
              {team &&
                team.map((item) => (
                  <tr key={item.ID}>
                    <td>{item.NAME}</td>
                    <td>{item.DESIGNATION}</td>
                    <td>
                      <img src={item.IMAGE} height={60} width={60} />
                    </td>

                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.ID)}
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </Table>
          </div>
        </div>

        <Modal title="New Employee" id="add_member">
          <form
            className="py-2 px-md-4 px-sm-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row text-center">
              {image ? (
                <img src={image} className="member_img" />
              ) : (
                <span className="member_img_alt">
                  <i class="fad fa-user"></i>
                </span>
              )}
            </div>
            <InputCol
              ref={register}
              type="file"
              name="employee_image"
              classes={classes}
              onChange={(e) => handleChange(e)}
              desc="* only .jpeg, .jpg and .png file type supported."
              error={!!errors.employee_image}
              helperText={errors?.employee_image?.message}
              required
            />

            <InputCol
              ref={register}
              name="employee_name"
              placeholder="Enter name"
              label="Employee Name"
              classes={classes}
              error={!!errors.employee_name}
              helperText={errors?.employee_name?.message}
            />

            <InputCol
              ref={register}
              name="employee_designation"
              placeholder="Enter Designation"
              label="Designation"
              classes={classes}
              error={!!errors.employee_designation}
              helperText={errors?.employee_designation?.message}
            />
            <Button className="btn btn-info" pClass="text-center">
              Submit
            </Button>
          </form>
        </Modal>
      </div>
    </section>
  );
}

export default Team;
