import alertModel from "../models/alertModle.js";


export const getAllAlert = async(req, res) =>{
    try {
        const alerts = await alertModel.find();
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({error:"Server Error!"})
    }
};
