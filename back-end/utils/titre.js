import { pool } from "./pool.js";

export const getTitreSQL = async (id) => {
    const [rows] = await pool.query("SELECT m.nom AS medaille_nom, e.nom AS epreuve_nom FROM dataJO.titre t JOIN dataJO.athlete a ON t.athlete_id = a.id JOIN dataJO.medaille m ON t.medaille_id = m.id JOIN dataJO.epreuve e ON t.epreuve_id = e.id WHERE a.id = ?", [id]);
    return rows[0];
};

export const createTitreSQL = async (athlete_id, epreuve_id, medaille_id) => {
    await pool.query("INSERT INTO dataJO.titre (athlete_id, epreuve_id, medaille_id) VALUES (?, ?, ?);", [athlete_id, epreuve_id, medaille_id])
};