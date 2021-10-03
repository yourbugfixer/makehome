const {
  insertProject,
  getProjects,
  updateProject,
  deleteProject,
  filterProjects,
} = require("./projects.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/", getProjects);
router.post("/filter", filterProjects);
router.post("/", insertProject);
router.patch("/", updateProject);
router.delete("/:project_id", deleteProject);

module.exports = router;
