import { Router } from "express";
import { getAddressDetails } from "../controllers/addressControllers.js";


const addressRouter = Router();

addressRouter.get('/:address', getAddressDetails);


export default addressRouter;