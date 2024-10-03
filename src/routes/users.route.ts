import { Router } from "express";
import { listUsersHandler } from "../controllers/users.controller";
const usersRouter = Router();

/* list all users */
usersRouter.route("/").get(listUsersHandler);

export default usersRouter;
