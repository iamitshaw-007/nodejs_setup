/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { IErrorHttpResponse } from "../types/http-response/error.type";

export function globalErrorHandler(
    errorObject: IErrorHttpResponse,
    _request: Request,
    response: Response,
    _nextFunction: NextFunction
) {
    response.status(errorObject.statusCode).json(errorObject);
}
