/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { IErrorHttpResponse } from "../types/http-response/error.type";
import { loggerUtil } from "../utils/logger.util";

export function globalErrorHandler(
    errorObject: IErrorHttpResponse,
    _request: Request,
    response: Response,
    _nextFunction: NextFunction
) {
    loggerUtil.info("Sending Error Response", { meta: errorObject });
    response.status(errorObject.statusCode).json(errorObject);
}
