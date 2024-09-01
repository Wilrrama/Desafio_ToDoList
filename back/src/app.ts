import "express-async-errors";
import "reflect-metadata";
import express from "express";
import swaggerUiExpress from "swagger-ui-express";
import swagerDocument from "./swagger.json";
import { usersRoutes } from "./routes/users.route";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import { sessionRouter } from "./routes/session.route";
import { tasksRoutes } from "./routes/tasks.route";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json("Minha primeira vaga Dev, Desafio To Do"));

app.use(
  "/api-doc",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swagerDocument)
);

app.use("/users", usersRoutes);
app.use("/login", sessionRouter);
app.use("/tasks", tasksRoutes);

app.use(handleAppErrorMiddleware);

export default app;
