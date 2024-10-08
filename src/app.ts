import express, { Application } from "express";
import path from "path";
import usersRoute from "./routes/users.route";
import { globalErrorHandler } from "./middlewares/global-error-handler.middleware";
import { routeNotFoundHandler } from "./utils/404_not_found.util";
import healthsRouter from "./routes/healths.route";
import helmet from "helmet";
import cors from "cors";

const app: Application = express();

/* third party Niddleware */
app.use(helmet());
app.use(
    cors({
        credentials: true,
        methods: ["GET", "PUT", "POST", "DELETE"],
        optionsSuccessStatus: 204,
        origin: ["http://localhost"],
    })
);

/* BuiltIn Middleware */
app.use(express.json({ limit: 100 }));
app.use(express.urlencoded({ extended: false }));
app.use(
    express.static(
        path.resolve(path.dirname(import.meta.filename), "../public")
    )
);

/* Routes */
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/health", healthsRouter);

/* 404 handler */
app.use("*", routeNotFoundHandler);

/* global-error-handler middleware */
app.use("*", globalErrorHandler);

export default app;
