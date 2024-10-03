import { NextFunction, Request, Response } from "express";
import { successHttpResponseObjectUtil } from "../utils/success-http-response.util";
import { errorHttpResponseObjectUtil } from "../utils/error-http-response.util";
export function listUsersHandler(
    request: Request,
    response: Response,
    nextFunction: NextFunction
) {
    try {
        successHttpResponseObjectUtil(request, response, 200, {
            message: "User Created",
        });
    } catch (error) {
        errorHttpResponseObjectUtil(error, request, response, nextFunction);
    }
}

export function createUserHandler(_: Request, response: Response) {
    response.send("User Created");
}
