const userName = "Amit Shaw";
console.error(`Hello ${userName}!`);

/* function to generate table */
function table(tableOf: number = 2): undefined {
    for (let index = 1; index <= 10; index++) {
        console.error(`${tableOf} * ${index} = ${tableOf * index}`);
    }
}

table(47);
