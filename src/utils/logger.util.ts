import { inspect } from "util";
import winston, { format } from "winston";
import { envVarsConfig } from "../configs/env_vars.config";
import {
    ConsoleTransportInstance,
    ConsoleTransportOptions,
    FileTransportInstance,
    FileTransportOptions,
} from "winston/lib/winston/transports";
import { AppInstanceEnum } from "../constants/application.constant";
import path from "path";

const consoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info;
    const hasMetaInformation =
        meta instanceof Object && Object.keys(meta).length > 0;
    const formattedMeta = hasMetaInformation
        ? `\nMETA: ${inspect(meta, {
              showHidden: false,
              depth: null,
          })}`
        : "";

    return `${level.toLocaleUpperCase()} [${timestamp}] ${message} ${formattedMeta}`;
});

const fileLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info;
    const hasMetaInformation =
        meta instanceof Object && Object.keys(meta).length > 0;
    let formattedMeta: string;
    if (hasMetaInformation) {
        const metaInfoObject: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(meta)) {
            if (value instanceof Error) {
                metaInfoObject[key] = {
                    name: value?.name,
                    message: value?.message,
                    trace: value?.stack,
                };
            } else {
                metaInfoObject[key] = value;
            }
        }
        formattedMeta = JSON.stringify(metaInfoObject);
    } else {
        formattedMeta = "";
    }
    return `${level.toLocaleUpperCase()} [${timestamp}] ${message} ${formattedMeta}`;
});

function consoleTransport(
    options: ConsoleTransportOptions
): ConsoleTransportInstance {
    return new winston.transports.Console(options);
}

function fileTransport(options: FileTransportOptions): FileTransportInstance {
    return new winston.transports.File(options);
}

/* ignore console logging in production */
const ignoreLogging = format((info) =>
    envVarsConfig.INSTANCE === AppInstanceEnum.PRODUCTION ? false : info
);
export const loggerUtil = winston.createLogger({
    defaultMeta: {
        meta: {},
    },
    transports: [
        consoleTransport({
            level: "info",
            format: format.combine(
                ignoreLogging(),
                format.timestamp(),
                consoleLogFormat
            ),
        }),
        fileTransport({
            filename: path.resolve(
                path.dirname(import.meta.filename),
                `../../logs/${envVarsConfig.INSTANCE}.log`
            ),
            level: "info",
            format: format.combine(format.timestamp(), fileLogFormat),
        }),
    ],
});
