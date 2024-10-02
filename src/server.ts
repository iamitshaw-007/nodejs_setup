import envConfig from "./configs/env_vars.config";
const userName = "Amit";
console.error(`Hello ${userName}!`);

/* function to generate table */
function table(tableOf: number = 2): undefined {
    for (let index = 1; index <= 10; index++) {
        console.error(`${tableOf} * ${index} = ${tableOf * index}`);
    }
}

table(47);
/* access process environment */
console.error(`Environment: ${envConfig.SYSTEM_ENV}!`);
