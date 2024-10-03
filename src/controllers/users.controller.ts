import { NextFunction, Request, Response } from "express";
import { successHttpResponseObjectUtil } from "../utils/success-http-response.util";
import { errorHttpResponseObjectUtil } from "../utils/error-http-response.util";
import { loggerUtil } from "../utils/logger.util";
export function listUsersHandler(
    request: Request,
    response: Response,
    nextFunction: NextFunction
) {
    try {
        loggerUtil.info("Calling Success Response Handler");
        successHttpResponseObjectUtil(request, response, 200, {
            message: "Users List",
        });
    } catch (error) {
        loggerUtil.info("Calling Error Response Generator");
        errorHttpResponseObjectUtil(error, request, response, nextFunction);
    }
}

export function createUserHandler(_: Request, response: Response) {
    response.send("User Created");
}
