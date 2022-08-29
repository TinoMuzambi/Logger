const express = require("express");
const feasibilityController = require("../controllers/feasibilityController");

const router = express.Router();

router.get("/", feasibilityController.list);

router.get("/:id", feasibilityController.show);

router.post("/", feasibilityController.create)

router.put("/:id", feasibilityController.update)

router.delete("/:id", feasibilityController.remove)

module.exports = router;
