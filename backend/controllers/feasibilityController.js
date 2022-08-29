import FeasibilityModel from "../models/FeasibilityModel";
import dbConnect from "../utils/mongodb";

export default options = {
    list: async function(req, res) {
        await dbConnect()
        FeasibilityModel.find((err, feasibilities) => {
            if (err) {
                return res.status(500).json({
                    err
                })}

                return res.status(200).json(feasibilities)
            })
        }
    }
