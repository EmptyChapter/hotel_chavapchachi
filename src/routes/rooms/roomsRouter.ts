import { Router } from "express";
import roomsHandler from "./listHandler";

/** Represents rooms router. */
const roomsRouter: Router = Router();

roomsRouter.get("/", roomsHandler);

export default roomsRouter;
