import express from "express";
import users from "./controllers/userController.js";

const routes = express.Router();

routes.get("/users", users.findAll);
routes.post("/users", users.addUser);
routes.get("/users/:id", users.findUser);
routes.put("/users/:id", users.uptadeUser);
routes.delete("/users/:id", users.deleteUser);

export default routes;