import { getEpreuveNamesSQL, getEpreuveSQL, createEpreuveSQL, updateEpreuveSQL } from "../utils/epreuves.js";

export const getEpreuvesNames = async (req, res) => {
    const epreuves = await getEpreuveNamesSQL();
    res.json(epreuves)
}

// export const deleteEpreuve = async (req, res) => {
//     const { id } = req.params;
//     await deleteEpreuveSQL(id);
//     res.json({ message: `Sport Deleted ${id}` });
// } 

export const updateEpreuve = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
      await updateEpreuveSQL(id, nom);
      res.json({ message: `Sport ${nom} patchted !` });
    } catch (error) {
      console.log("error", error);
    }
}

export const createEpreuve = async (req, res) => {
    const { nom } = req.body;
    try {
      await createEpreuveSQL(nom);
      res.json({ message: `Sport ${nom} created !` });
    } catch (error) {
      console.log("error", error);
    }
}

export const getEpreuve = async (req, res) => {
    const { id } = req.params;
  try {
    const sport = await getEpreuveSQL(id);
    res.json(sport);
  } catch (error) {
    console.log("error", error);
  }
}