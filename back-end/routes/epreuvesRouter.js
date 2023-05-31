import express  from "express";
import { getEpreuvesNames, deleteEpreuve, updateEpreuve, createEpreuve, getEpreuve} from "../controller/epreuvesController.js"

const router = express.Router();


router.get("/", getEpreuvesNames);
router.get("/:id", deleteEpreuve);
router.post("/:id", updateEpreuve);
router.delete("/", createEpreuve);
router.patch("/:id", getEpreuve);

export default router;