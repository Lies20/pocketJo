import {pool} from "./pool.js"

// READ
export const getEpreuveNamesSQL = async () => {
    const [rows] = await pool.query('SELECT nom FROM epreuve');
    return rows;
}

export const getEpreuveSQL = async (nameId) => {
    const row = await pool.query('SELECT nom FROM epreuve WHERE id = ?');

    try {
        const [result] = await pool.query(row, [nameId]);
        return result;
      } catch (error) {
        console.error('Error deleting epreuve:', error);
        throw error;
      }
}

// DELETE
export const deleteEpreuveSQL = async (epreuveId) => {
    const deleteQuery = 'DELETE FROM epreuve WHERE id = ?';
  
    try {
      const [result] = await pool.query(deleteQuery, [epreuveId]);
      return result;
    } catch (error) {
      console.error('Error deleting epreuve:', error);
      throw error;
    }
  };

  // POST 

  export const createEpreuveSQL = async (epreuveData) => {
    const { nom } = epreuveData;
    const insertQuery = 'INSERT INTO epreuve (nom) VALUES (?)';
  
    try {
      const [result] = await pool.query(insertQuery, [nom]);
      return result.insertId;
    } catch (error) {
      console.error('Error creating epreuve:', error);
      throw error;
    }
  };

  // UPDATE 

  export const updateEpreuveSQL = async (epreuveId, updatedData) => {
    const { nom } = updatedData;
    const updateQuery = 'UPDATE epreuve SET nom = ? WHERE id = ?';
  
    try {
      const [result] = await pool.query(updateQuery, [nom, epreuveId]);
      return result.affectedRows;
    } catch (error) {
      console.error('Error updating epreuve:', error);
      throw error;
    }
  };
