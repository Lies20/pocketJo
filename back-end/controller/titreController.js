import { getTitreSQL, createTitreSQL } from "../utils/titre.js";

export const getTitre = async (req, res) => {
    const titres = await getTitreSQL();
    res.json(titres);
};

export const createTitre = async (req, res) => {
    const {athlete_id, epreuve_id, medaille_id} = req.body;
    try {
		await createTitreSQL(athlete_id, epreuve_id, medaille_id);
		res.json({ message: `GO FUCK YOURSELF!! <3` });
	} catch (error) {
		console.log("error", error);
	}
}