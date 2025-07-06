import { Router } from "express";
import newHandler from "./newHandler";
import cancelHandler from "./cancelHandler";

/** Represents reservations router. */
const reservationsRouter: Router = Router();

reservationsRouter.post("/new", newHandler);
reservationsRouter.delete("/cancel", cancelHandler);

export default reservationsRouter;
