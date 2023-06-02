import {pool} from "./pool.js"



export const getAthleteNameSQL = async () => {
	const [rows] = await pool.query("SELECT * FROM athlete");
	return rows;
};

export const deleteAthleteSQL = async (id) =>
{

  // const transaction = await pool.beginTransaction();

  const sql = [
    
    {
      sql: "DELETE FROM dataJO.titre WHERE athlete_id = ?;",
      sqlData: [id],
    },
    {
      sql: "DELETE FROM dataJO.athlete WHERE id = ?;",
      sqlData: [id],
    }
  ];
  const sqlPromesse = [];
  sql.map(value => {
    sqlPromesse.push(
      pool.query(value.sql, value?.sqlData)
    )
  });

  return Promise.all(sqlPromesse);
  
};

export const createAthleteSQL = async (nom) => {
    await pool.query("INSERT INTO athlete (nom) VALUES (?)", [nom]);
  };

  export const updateAthleteSQL = async (nom,id) =>
{
    await pool.query("UPDATE athlete SET nom = ? WHERE id = ?",[nom,id])
};

export const getAthleteSQL = async (id) => {
    const [rows] = await pool.query("SELECT * FROM athlete where id = ?", [id]);
    return rows[0];
  };

  // START TRANSACTION;

  // DELETE FROM dataJO.titre
  // WHERE athlete_id = 7;
  
  // DELETE FROM dataJO.athlete
  // WHERE id = 7;
  
  // COMMIT;

// START TRANSACTION;

// DELETE t
// FROM dataJO.titre t
// JOIN dataJO.epreuve e ON t.epreuve_id = e.id
// JOIN dataJO.sport s ON e.sport_id = s.id
// WHERE t.athlete_id = <athlete_id>
//   AND s.id IN (
//     SELECT s.id
//     FROM dataJO.titre t
//     JOIN dataJO.epreuve e ON t.epreuve_id = e.id
//     JOIN dataJO.sport s ON e.sport_id = s.id
//     WHERE t.athlete_id = <athlete_id>
//   );

// DELETE FROM dataJO.titre
// WHERE athlete_id = <athlete_id>;

// DELETE FROM dataJO.athlete
// WHERE id = <athlete_id>;

// COMMIT;