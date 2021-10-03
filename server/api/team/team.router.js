const {
  insertEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeByID,
} = require("./team.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/", getEmployee);
router.get("/:employee_id", getEmployeeByID);
router.post("/", insertEmployee);
router.patch("/", updateEmployee);
router.delete("/:employe_id", deleteEmployee);

module.exports = router;
