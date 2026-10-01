import express from "express";
import messagesController from "../../../controllers/api/v1/messages.js";

const router = express.Router();

router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getById);
router.post("/", messagesController.create);

export default router;
