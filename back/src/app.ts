import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { usersRoutes } from "./routes/users.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json("Minha primeira vaga Dev, Desafio To Do"));

app.use("/users", usersRoutes);

export default app;
