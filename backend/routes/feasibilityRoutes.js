import express from "express";
import feasibilityController from "../controllers/feasibilityController";

const router = express.Router()

router.get("/", feasibilityController.list)

export default router