import addressModel from "../models/addressModel.js";


export const getAddressDetails = async (req, res) => {
    try {
        const {address} = req.params;
        const addressDetails = await addressModel.findOne({address});
        if(!addressDetails){
            return res.status(404).json({error:"Address not found!"});
        };
        res.status(200).json(addressDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error:"server error!"})
    }
};

