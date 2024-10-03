import { envVarsConfig } from "./configs/env_vars.config";
import { loggerUtil } from "./utils/logger.util";
import app from "./app";
(function () {
    try {
        /* Database Connection */
        loggerUtil.info("Database Connected", {
            meta: {
                port: envVarsConfig.PORT,
                environment: envVarsConfig.INSTANCE,
            },
        });
    } catch (error) {
        loggerUtil.error("Application Error", { meta: error });
    }
})();
app.listen(envVarsConfig.PORT, function () {
    loggerUtil.info(`Server started on PORT: ${envVarsConfig.PORT}`);
});
