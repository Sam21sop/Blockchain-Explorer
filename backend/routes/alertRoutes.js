import { Router } from "express";
import { getAllAlert } from "../controllers/alertController.js";

const alertRouter = Router();

alertRouter.get('/', getAllAlert);

export default alertRouter;