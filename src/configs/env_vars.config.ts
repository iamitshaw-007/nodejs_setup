import path from "path";
import fs from "fs";
import dotenv from "dotenv";

const Environment = process.env.NODE_ENV || "development";
const envFilePath = path.resolve(
    path.dirname(import.meta.filename),
    `../../.env.${Environment}`
);

try {
    if (fs.existsSync(envFilePath)) {
        dotenv.configDotenv({
            path: envFilePath,
        });
    }
} catch (error) {
    console.error(error);
    process.exit(1);
}

export default {
    SYSTEM_ENV: process.env.CURRENT_ENV,
};
