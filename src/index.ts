import express from "express";
import errorMiddleware from "./middleware/errorsMiddleware";
import appRouter from "./routes/appRouter";

const app = express();

console.log("Initializing server...");

app.use(express.json());
app.use("/api", appRouter);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
