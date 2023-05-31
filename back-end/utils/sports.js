import mysql from "mysql2";

export const pool = mysql
	.createPool({
		host: "localhost",
		database: "dataJO",
		password: "",
		user: "root",
	})
	.promise();

export const getSportName = async () => {
	const [rows] = await pool.query("SELECT * FROM sport");
	return rows;
};
=======
export const getSportNameSQL = async () => {
    const [rows] = await pool.query('SELECT * FROM sport');
    return rows;
}

export const deleteSportSQL = async (id) =>
{
  await pool.query("DELETE FROM sport WHERE id = ? ", [id]);
};

export const createSportSQL = async (nom) => {
    await pool.query("INSERT INTO sport (nom) VALUES (?)", [nom]);
  };

  export const modifySportSQL = async (nom,id) =>
{
    await pool.query("UPDATE sport SET nom = ? WHERE id = ?",[nom,id])
}

export const getSportSQL = async (id) => {
    const [rows] = await pool.query("SELECT * FROM sport where id = ?", [id]);
    return rows[0];
  };

