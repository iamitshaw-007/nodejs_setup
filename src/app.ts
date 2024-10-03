import express, { Application } from "express";
import path from "path";
import usersRoute from "./routes/users.route";
import { globalErrorHandler } from "./middlewares/global-error-handler.middleware";

const app: Application = express();

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

/* global-error-handler middleware */
app.use("*", globalErrorHandler);

export default app;
