import express from "express";
import { getTitre, createTitre } from "../controller/titreController.js";

const router = express.Router();

router.get("/", getTitre);
router.post("/", createTitre);

export default router;