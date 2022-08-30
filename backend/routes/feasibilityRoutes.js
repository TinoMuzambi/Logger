const express = require("express");

const feasibilityController = require("../controllers/feasibilityController");

// Get express router.
const router = express.Router();

/**
 * GET method for getting all feasibilities.
 */
router.get("/", feasibilityController.list);

/**
 * GET method for getting a specified feasibility.
 */
router.get("/:id", feasibilityController.show);

/**
 * POST request for creating a feasibility.
 */
router.post("/", feasibilityController.create)

/**
 * PUT request for updating a feasibility.
 */
router.put("/:id", feasibilityController.update)

/**
 * DELETE request for deleting a feasibility.
 */
router.delete("/:id", feasibilityController.remove)

module.exports = router;
