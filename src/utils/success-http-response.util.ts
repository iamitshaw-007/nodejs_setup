import { Request, Response } from "express";
import { ISuccessHttpResponse } from "../types/http-response/success.type";
import { envVarsConfig } from "../configs/env_vars.config";
import { EApplicationEnvironment } from "../constants/application.constant";

export function successHttpResponseObjectUtil(
    request: Request,
    response: Response,
    statusCode: number,
    data: unknown,
    message: string | undefined = undefined
): void {
    const successObject: ISuccessHttpResponse = {
        success: true,
        statusCode,
        data,
        message: message,
        request:
            envVarsConfig.SYSTEM_ENV === EApplicationEnvironment.DEVELOPMENT
                ? {
                      ip: request?.ip,
                      method: request?.method,
                      url: request?.originalUrl,
                  }
                : undefined,
    };
    response.status(statusCode).json(successObject);
}
