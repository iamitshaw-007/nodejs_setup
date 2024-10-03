import envConfig from "./configs/env_vars.config";
import app from "./app";

app.listen(envConfig.PORT, function () {
    console.warn(`Server started on PORT: ${envConfig.PORT}`);
});
