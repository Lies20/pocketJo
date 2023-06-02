import express  from "express";
import { getEpreuvesNames, updateEpreuve, createEpreuve, getEpreuve} from "../controller/epreuvesController.js"

const router = express.Router();


router.get("/", getEpreuvesNames);
router.post("/:id", updateEpreuve);
router.delete("/", createEpreuve);
router.patch("/:id", getEpreuve);

export default router;