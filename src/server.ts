import { envVarsConfig } from "./configs/env_vars.config";
import app from "./app";

app.listen(envVarsConfig.PORT, function () {
    console.warn(`Server started on PORT: ${envVarsConfig.PORT}`);
});
