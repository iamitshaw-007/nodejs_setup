import { NextFunction, Request, Response } from "express";
import { IErrorHttpResponse } from "../types/http-response/error.type";
import { envVarsConfig } from "../configs/env_vars.config";
import { AppInstanceEnum } from "../constants/application.constant";
import { responseMessage } from "../constants/response-message.constant";
import { loggerUtil } from "./logger.util";

export function errorHttpResponseObjectUtil(
    error: Error | unknown,
    request: Request,
    _: Response,
    nextFunction: NextFunction,
    statusCode: number = 500,
    data: unknown = null
): void {
    loggerUtil.info("Generating Error Object");
    let requestObject, traceObject;
    if (envVarsConfig.INSTANCE === AppInstanceEnum.DEVELOPMENT) {
        requestObject = {
            ip: request?.ip,
            method: request?.method,
            url: request?.originalUrl,
        };
        traceObject = error instanceof Error ? { errorStack: error.stack } : {};
    }
    const errorObject: IErrorHttpResponse = {
        success: false,
        statusCode,
        data,
        message:
            error instanceof Error
                ? error.message || responseMessage.SOMETHING_WENT_WRONG
                : responseMessage.SOMETHING_WENT_WRONG,
        request: requestObject,
        trace: traceObject,
    };

    /* to handle error */
    nextFunction(errorObject);
}
