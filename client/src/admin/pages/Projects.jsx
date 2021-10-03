import React, { useEffect, useState } from "react";
import Breadcrum from "../components/Breadcrum";
import Table from "../components/DataTable";
import { Modal, ModalButton } from "../components/Modal";
import { InputCol, Button, DropDown } from "../../utils/formControls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../utils/Utility";
import { projectSchema, cateogrySchema, classes } from "../../utils/Validation";
import Swal from "sweetalert2";
import { useData } from "../../context/GetData";

function Projects() {
  const { project, setProject, cateogry, setCateogry } = useData();
  const [image, setImage] = useState(null);

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(projectSchema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    errors: errors2,
    reset: reset2,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(cateogrySchema),
  });

  function handleChange(event) {
    var ext = ["image/jpeg", "image/jpg", "image/png"];
    if (ext.indexOf(event.target.files[0].type) > -1) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const onSubmit = (data) => {
    const fd = new FormData();
    fd.append("project_title", data.project_title);
    fd.append("project_cateogry", parseInt(data.project_cateogry));
    fd.append("project_image", data.project_image[0]);
    api
      .post("/projects", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success === 1) {
          reset();
          setImage(null);
          setProject(res.data.data);
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

  const cateogrySubmit = (data) => {
    api
      .post("/cateogry", {
        new_cateogry: data.new_cateogry,
      })
      .then((res) => {
        if (res.data.success === 1) {
          reset2();
          setCateogry(res.data.data);
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

  function handleDelete(project_id) {
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
        api.delete(`/projects/${project_id}`).then((res) => {
          if (res.data.success === 1) {
            setProject(res.data.data);
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

  function handleCateogryDelete(c_id) {
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
        api.delete(`/cateogry/${c_id}`).then((res) => {
          if (res.data.success === 1) {
            setCateogry(res.data.data);
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

  const project_header = ["Title", "Cateogry", "Image", ""];
  const cateogry_header = ["Cateogry", "Delete"];
  return (
    <>
      <section>
        <div className="col-sm-11 mx-auto">
          <Breadcrum title="Projects">
            <ModalButton id="add_project" className="btn btn-info">
              New project
            </ModalButton>
          </Breadcrum>

          <div className="ybf_card ">
            <div className="table-responsive custom-table-responsive">
              <Table header={project_header}>
                {project &&
                  project.map((item) => (
                    <tr key={item.PID}>
                      <td>{item.TITLE}</td>
                      <td>{item.C_TITLE}</td>
                      <td>
                        <img src={item.IMAGE} height={60} width={60} />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.PID)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </Table>
            </div>
          </div>

          <Modal title="Add Project" id="add_project">
            <form className="px-md-4 px-sm-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="row text-center">
                <img src={image} className="project_img" />
              </div>
              <InputCol
                ref={register}
                type="file"
                classes={classes}
                name="project_image"
                desc="* only .jpeg, .jpg and .png file type supported."
                onChange={(e) => handleChange(e)}
                error={!!errors.project_image}
                helperText={errors?.project_image?.message}
                required
              />

              <InputCol
                ref={register}
                classes={classes}
                name="project_title"
                placeholder="Enter project title"
                label="Title"
                error={!!errors.project_title}
                helperText={errors?.project_title?.message}
              />

              <DropDown
                ref={register}
                classes={classes}
                name="project_cateogry"
                label="Cateogry"
                placeholder="Cateogry"
                error={!!errors.project_cateogry}
                helperText={errors?.project_cateogry?.message}
              >
                {cateogry &&
                  cateogry.map((item) => (
                    <option key={item.C_ID} value={item.C_ID}>
                      {item.C_TITLE}
                    </option>
                  ))}
              </DropDown>

              <Button className="btn btn-info" pClass="text-center">
                Submit
              </Button>
            </form>
          </Modal>
        </div>
      </section>

      <section className="mt-3">
        <div className="col-sm-11 mx-auto">
          <Breadcrum title="Cateogry">
            <ModalButton id="add_cateogry" className="btn btn-info">
              Add New
            </ModalButton>
          </Breadcrum>

          <div className="ybf_card ">
            <div className="table-responsive custom-table-responsive">
              <Table header={cateogry_header}>
                {cateogry &&
                  cateogry.map((item) => (
                    <tr key={item.C_ID}>
                      <td>{item.C_TITLE}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleCateogryDelete(item.C_ID)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </Table>

              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <Modal title="Add Cateogry" id="add_cateogry">
          <form
            className="py-4 px-md-4 px-sm-2"
            onSubmit={handleSubmit2(cateogrySubmit)}
          >
            <InputCol
              ref={register2}
              name="new_cateogry"
              classes={classes}
              placeholder="Enter new cateogry"
              label="New Cateogry"
              error={!!errors2.new_cateogry}
              helperText={errors2?.new_cateogry?.message}
            />

            <Button className="btn btn-info" pClass="text-center">
              Save
            </Button>
          </form>
        </Modal>
      </section>
    </>
  );
}

export default Projects;
