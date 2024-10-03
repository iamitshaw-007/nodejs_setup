import { NextFunction, Request, Response } from "express";
import { responseMessage } from "../constants/response-message.constant";
import { errorHttpResponseObjectUtil } from "./error-http-response.util";

/* route not found handler */
export function routeNotFoundHandler(
    request: Request,
    response: Response,
    nextFunction: NextFunction
) {
    try {
        throw new Error(responseMessage.NOT_FOUND("Route"));
    } catch (error) {
        errorHttpResponseObjectUtil(
            error,
            request,
            response,
            nextFunction,
            404
        );
    }
}
