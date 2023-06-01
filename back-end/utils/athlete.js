import {pool} from "./pool.js"



export const getAthleteNameSQL = async () => {
	const [rows] = await pool.query("SELECT * FROM athlete");
	return rows;
};

export const deleteAthleteSQL = async (id) =>
{
  await pool.query("DELETE FROM sport WHERE id = ? ", [id]);
};

export const createAthleteSQL = async (nom) => {
    await pool.query("INSERT INTO sport (nom) VALUES (?)", [nom]);
  };

  export const updateAthleteSQL = async (nom,id) =>
{
    await pool.query("UPDATE sport SET nom = ? WHERE id = ?",[nom,id])
};

export const getAthleteSQL = async (id) => {
    const [rows] = await pool.query("SELECT * FROM sport where id = ?", [id]);
    return rows[0];
  };
