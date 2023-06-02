import express from "express";
import {
	getAthleteName,
	getAthlete,
	deleteAthlete,
	createAthlete,
	updateAthlete
} from "../controller/atheleteController.js";

const router = express.Router();

// GET

router.get("/", getAthleteName);

router.get("/:id", getAthlete);

// router.get("/delete/:id", deleteAthlete);

// POST

router.post("/", createAthlete);

// DELETE

router.delete("/:id", deleteAthlete);

// PATCH

router.patch("/:id", updateAthlete);

export default router;
