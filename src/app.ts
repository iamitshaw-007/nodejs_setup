import express, { Application } from "express";
import path from "path";
import usersRoute from "./routes/users.route";

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

export default app;
