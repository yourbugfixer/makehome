require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const adminRouter = require("./api/admin/admin.router");
const contactRouter = require("./api/contact/contact.router");
const teamRouter = require("./api/team/team.router");
const projectsRouter = require("./api/projects/projects.router");
const cateogryRouter = require("./api/cateogry/cateogry.router");

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/admin", adminRouter);
app.use("/contact", contactRouter);
app.use("/team", teamRouter);
app.use("/projects", projectsRouter);
app.use("/cateogry", cateogryRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port: ${port}`));
