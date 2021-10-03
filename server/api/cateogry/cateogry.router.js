const {
  insertCateogry,
  getCateogry,
  updateCateogry,
  deleteCateogry,
} = require("./cateogry.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/", getCateogry);
router.post("/", insertCateogry);
router.patch("/", updateCateogry);
router.delete("/:c_id", deleteCateogry);

module.exports = router;
