import { Request, Response } from "express";
import { ISuccessHttpResponse } from "../types/http-response/success.type";
import { envVarsConfig } from "../configs/env_vars.config";
import { AppInstanceEnum } from "../constants/application.constant";
import { loggerUtil } from "./logger.util";

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
            envVarsConfig.INSTANCE === AppInstanceEnum.DEVELOPMENT
                ? {
                      ip: request?.ip,
                      method: request?.method,
                      url: request?.originalUrl,
                  }
                : undefined,
    };

    loggerUtil.info("Sending Success Response", { meta: successObject });
    response.status(statusCode).json(successObject);
}
