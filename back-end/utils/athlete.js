import pool from "./sports.js";

export const getAtheleteName = async () => {
	const [rows] = await pool.query("SELECT * FROM athlete");
	return rows;
};
