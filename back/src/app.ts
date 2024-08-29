import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRoutes } from "./routes/users.route";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import { sessionRouter } from "./routes/session.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json("Minha primeira vaga Dev, Desafio To Do"));

app.use("/users", usersRoutes);
app.use("/login", sessionRouter);

app.use(handleAppErrorMiddleware);

export default app;
