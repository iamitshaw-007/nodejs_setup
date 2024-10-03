import { NextFunction, Request, Response } from "express";
import { responseMessage } from "../constants/response-message.constant";
import { errorHttpResponseObjectUtil } from "./error-http-response.util";
import { loggerUtil } from "./logger.util";

/* route not found handler */
export function routeNotFoundHandler(
    request: Request,
    response: Response,
    nextFunction: NextFunction
) {
    try {
        loggerUtil.error("Route Not Found", {
            meta: {
                url: request.originalUrl,
            },
        });
        throw new Error(responseMessage.NOT_FOUND("Route"));
    } catch (error) {
        loggerUtil.info("Calling Error Response Generator");
        errorHttpResponseObjectUtil(
            error,
            request,
            response,
            nextFunction,
            404
        );
    }
}
