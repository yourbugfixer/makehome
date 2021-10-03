const {
  insertMessage,
  getMessage,
  updateStatus,
} = require("./contact.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/", getMessage);
router.post("/", insertMessage);
router.patch("/", updateStatus);

module.exports = router;
