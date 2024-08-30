import { Router } from "express";
import { sessionController } from "../controllers";

const sessionRouter = Router();

sessionRouter.post("", (req, res) => sessionController.createLogin(req, res));

export { sessionRouter };
