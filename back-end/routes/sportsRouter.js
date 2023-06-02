import express  from "express";
import { getSport, getSportName, modifySport, createSport} from "../controller/sportsController.js"

const router = express.Router();


router.get("/", getSportName);
router.get("/:id", getSport)
router.post("/", createSport)
router.patch("/:id", modifySport)

export default router;