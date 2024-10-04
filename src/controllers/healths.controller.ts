import { NextFunction, Request, Response } from "express";
import { successHttpResponseObjectUtil } from "../utils/success-http-response.util";
import { errorHttpResponseObjectUtil } from "../utils/error-http-response.util";
import { loggerUtil } from "../utils/logger.util";
import os from "os";
import { envVarsConfig } from "../configs/env_vars.config";

export function systemHealthHandler(
    request: Request,
    response: Response,
    nextFunction: NextFunction
) {
    try {
        const systemHealthObject = {
            timeStamp: Date.now(),
            cpuUsage: os.loadavg,
            totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(0)} MB`,
            freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(0)} MB`,
        };
        loggerUtil.info("Calling Success Response Handler");
        successHttpResponseObjectUtil(
            request,
            response,
            200,
            systemHealthObject
        );
    } catch (error) {
        loggerUtil.info("Calling Error Response Generator");
        errorHttpResponseObjectUtil(error, request, response, nextFunction);
    }
}

export function applicationHealthHandler(
    request: Request,
    response: Response,
    nextFunction: NextFunction
) {
    try {
        const applicationHealthObject = {
            timeStamp: Date.now(),
            environment: envVarsConfig.INSTANCE,
            uptime: `${process.uptime().toFixed(2)} seconds`,
            memoryUsage: {
                totalHeap: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(0)} MB`,
                freeHeap: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0)} MB`,
            },
        };
        loggerUtil.info("Calling Success Response Handler");
        successHttpResponseObjectUtil(
            request,
            response,
            200,
            applicationHealthObject
        );
    } catch (error) {
        loggerUtil.info("Calling Error Response Generator");
        errorHttpResponseObjectUtil(error, request, response, nextFunction);
    }
}
