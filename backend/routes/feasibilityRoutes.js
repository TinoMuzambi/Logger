const express = require("express");
const feasibilityController = require("../controllers/feasibilityController");

const router = express.Router();

router.get("/", feasibilityController.list);

module.exports = router;
