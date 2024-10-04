import { Router } from "express";
import {
    applicationHealthHandler,
    systemHealthHandler,
} from "../controllers/healths.controller";
const healthsRouter = Router();

/* list all users */
healthsRouter.route("/system").get(systemHealthHandler);
healthsRouter.route("/application").get(applicationHealthHandler);

export default healthsRouter;
