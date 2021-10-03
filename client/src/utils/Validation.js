import * as yup from "yup";

export const classes = {
  error: "ms-3 text-danger",
};

export const loginSchema = yup.object().shape({
  admin_email: yup.string().required("Username required !!"),
  admin_password: yup.string().required("Password required !!"),
});

export const contactSchema = yup.object().shape({
  contact_name: yup.string().required("Required !!"),
  contact_subject: yup.string().ensure().required("Subject required !!"),
  contact_email: yup.string().email("Invalid email !!").required("Required !!"),
  contact_phone: yup
    .string()
    .required("Required !!")
    .matches(/^\d{10}$/, "Invalid Phone number !!"),
  contact_message: yup.string().required("Required !!"),
});

export const teamSchema = yup.object().shape({
  employee_image: yup
    .mixed()
    .required("* Image required !!")
    .test("type", "* Only .jpeg, .jpg and .png file supported", (value) => {
      return (
        (value && value[0].type === "image/jpeg") ||
        value[0].type === "image/png" ||
        value[0].type === "image/jpg"
      );
    }),
  employee_name: yup.string().required("* Name required !!"),
  employee_designation: yup.string().required("* Designation required !!"),
});

export const projectSchema = yup.object().shape({
  project_image: yup
    .mixed()
    .required("* Image required !!")
    .test("type", "* Only .jpeg, .jpg and .png file supported", (value) => {
      return (
        (value && value[0].type === "image/jpeg") ||
        value[0].type === "image/png" ||
        value[0].type === "image/jpg"
      );
    }),
  project_title: yup.string().required("* Project title required !!"),
  project_cateogry: yup.string().ensure().required("* Select cateogry !!"),
});

export const cateogrySchema = yup.object().shape({
  new_cateogry: yup.string().required("* Cateogry required !!"),
});

export const adminSchema = yup.object().shape({
  admin_name: yup.string().required("Required !!"),
  admin_email: yup
    .string()
    .email("Enter valid email !!")
    .required("Required !!"),
  password: yup.string().required("Required !!"),
  admin_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match !!"),
});

export const passwordSchema = yup.object().shape({
  old_password: yup.string().required("Required !!"),
  new_password: yup.string().required("Required !!"),
  new_admin_password: yup
    .string()
    .oneOf([yup.ref("new_password"), null], "Passwords must match !!"),
});
