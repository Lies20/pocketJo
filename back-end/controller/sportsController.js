import {  getSportNameSQL, getSportSQL, createSportSQL, modifySportSQL } from "../utils/sports.js";


export const getSportName = async (req, res) => {
    const sports = await getSportNameSQL()
    res.json(sports)
}

export const modifySport = async (req, res) => {
    const { nom } = req.body;
    const { id } = req.params;
    try {
      await modifySportSQL(nom, id);
      res.json({ message: `Sport ${nom} patchted !` });
    } catch (error) {
      console.log("error", error);
    }
}

export const createSport = async (req, res) => {
    const { nom } = req.body;
    try {
      await createSportSQL(nom);
      res.json({ message: `Sport ${nom} created !` });
    } catch (error) {
      console.log("error", error);
    }
}

export const getSport = async (req, res) => {
    const { id } = req.params;
  try {
    const sport = await getSportSQL(id);
    res.json(sport);
  } catch (error) {
    console.log("error", error);
  }
}