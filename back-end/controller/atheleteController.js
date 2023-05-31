import {
	getAthleteNameSQL,
	getAthleteSQL,
	deleteAthleteSQL,
	createAthleteSQL,
	updateAthleteSQL,
} from "../utils/athlete.js";

// GET ALL ATHLETES

export const getAthleteName = async (req, res) => {
	const athletes = await getAthleteNameSQL();
	res.json(athletes);
};

// GET SINGLE ATHLETE BY ID

export const getAthlete = async (req, res) => {
	const { id } = req.params;
	try {
		const athlete = await getAthleteSQL(id);
		res.json(athlete);
	} catch (error) {
		console.log("error", error);
	}
};

//  DELETE SINGLE ATHLETE BY ID

export const deleteAthlete = async (req, res) => {
	const { id } = req.params;
	console.log("id", id);
	await deleteAthleteSQL(id);
	res.json({ message: `Athlete Deleted ${id}` });
};

// CREATE ATHLETE

export const createAthlete = async (req, res) => {
	const { nom, prenom } = req.body;
	try {
		await createAthleteSQL(nom, prenom);
		res.json({ message: `Athlete ${nom} ${prenom} created !` });
	} catch (error) {
		console.log("error", error);
	}
};

// UPDATE ATHLETE BY ID

export const updateAthlete = async (req, res) => {
	const { nom, prenom } = req.body;
	const { id } = req.params;
	try {
		await updateAthleteSQL(nom, prenom, id);
		res.json({ message: `Athlete ${nom} ${prenom} patchted !` });
	} catch (error) {
		console.log("error", error);
	}
};
