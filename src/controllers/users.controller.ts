import { Request, Response } from "express";
export function listUsersHandler(_: Request, response: Response) {
    response.send("Users List");
}

export function createUserHandler(_: Request, response: Response) {
    response.send("User Created");
}
