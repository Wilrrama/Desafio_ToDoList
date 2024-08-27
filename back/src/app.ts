import "express-async-errors";
import "reflect-metadata";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json("Minha primeira vaga Dev"));

export default app;
