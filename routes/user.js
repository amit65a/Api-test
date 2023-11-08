const express = require("express");
const router = express.Router();

const { getAllUser, getUser, getuser, filter, sort } = require("../controllers/user");

router.route("/").get(getAllUser);
router.route("/testing").get(getUser);
router.route("/getuser").get(getuser);
router.route("/filter").get(filter);
module.exports = router;