import { getSportName } from "../utils/sports.js";


export const getSports = async (req, res) => {
    const sports = await getSportName()
    res.json(sports)
}