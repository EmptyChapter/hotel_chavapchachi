import { Router } from "express";
import roomsRouter from "./rooms/roomsRouter";
import reservationsRouter from "./rents/reservationsRouter";

/** Represents application router. */
const appRouter: Router = Router();

appRouter.use("/rooms", roomsRouter);
appRouter.use("/reservations", reservationsRouter);

export default appRouter;
