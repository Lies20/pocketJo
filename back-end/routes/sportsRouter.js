import express  from "express";
import {getSports} from "../controller/sportsController.js"

const router = express.Router();

router.get("/", getSports);

export default router;