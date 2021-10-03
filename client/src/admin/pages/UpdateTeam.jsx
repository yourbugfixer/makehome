import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Modal, ModalButton } from "../components/Modal";
import { InputCol, Button } from "../../utils/formControls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../utils/Utility";
import { teamSchema, classes } from "../../utils/Validation";

function UpdateTeam({ id, value }) {
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamGlobal = await api.get(`/team/${value}`);

      setData(teamGlobal.data.data);
    };

    value && fetchData();
  }, [value]);
  console.log(data);

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
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    var isValid = allowedExtensions.test(event.target.files[0]);
    if (isValid) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }
  return (
    <Modal title="New Employee" id={id}>
      {data.length > 0 ? (
        data.map((item) => (
          <form
            className="py-2 px-md-4 px-sm-2"
            onSubmit={handleSubmit(onSubmit)}
            key={item.ID}
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
              defaultValue={item.NAME}
              placeholder="Enter name"
              label="Employee Name"
              classes={classes}
              error={!!errors.employee_name}
              helperText={errors?.employee_name?.message}
            />

            <InputCol
              ref={register}
              name="employee_designation"
              defaultValue={item.DESIGNATION}
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
        ))
      ) : (
        <p>Something went wrong. Try again</p>
      )}
    </Modal>
  );
}

export default UpdateTeam;
