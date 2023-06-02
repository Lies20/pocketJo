import {pool} from "./pool.js"


export const getSportNameSQL = async () => {
    const [rows] = await pool.query('SELECT * FROM sport');
    return rows;
}

export const createSportSQL = async (nom) => {
  const x = nom;
  const insertQuery = 'INSERT INTO sport (nom) VALUES (?)';

  try {
    const [result] = await pool.query(insertQuery, [x]);
    return result.insertId;
  } catch (error) {
    console.error('Error creating sport:', error);
    throw error;
  }
    // await pool.query("INSERT INTO sport (nom) VALUES (?)", [nom]);
  };

  export const modifySportSQL = async (nom,id) =>
{
    const x  = nom;
    const updateQuery = 'UPDATE sport SET nom = ? WHERE id = ?';

    try {
      const [result] = await pool.query(updateQuery, [x, id]);
      return result.affectedRows;
    } catch (error) {
      console.error('Error updating sport:', error);
      throw error;
    }
    // await pool.query("UPDATE sport SET nom = ? WHERE id = ?",[nom,id])
}

export const getSportSQL = async (id) => {
    const [rows] = await pool.query("SELECT * FROM sport where id = ?", [id]);
    return rows[0];
  };

