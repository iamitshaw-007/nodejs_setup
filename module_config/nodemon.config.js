export const nodemonConfig = {
    "watch": ["src"],
    "ext": "js,json",
    "ignore": ["node_modules", "dist"],
    "exec": "node ./src/index.js",
    "delay": "2500",
    "verbose": true,
    "legacyWatch": true,
    "signal": "SIGHUP",
    "restartable": "rs",
    "env": {
        "NODE_ENV": "development",
        "DEBUG": "app:*"
    },
    "events": {
        "restart": "echo 'App restarted due to changes'",
        "crash": "echo 'App crashed'",
        "exit": "echo 'App exited'",
        "start": "echo 'App has started'",
        "stdout": "echo 'stdout data'"
    },
    "watch_interval": 1000,
    "execMap": {
        "js": "node",
        "py": "python"
    },
    "stdout": true,
    "stdin": true,
    "runOnChangeOnly": false,
    "cwd": ".",
    "execArgs": ["--inspect"],
    "colours": true,
    "dump": true,
    "configFile": "path/to/nodemon.json",
    "quiet": false,
    "restartDelay": 0,
    "restartTries": 0,
    "monitor": ["src/**/*"],
    "execOptions": {
        "exec": "node",
        "ext": "js,json",
        "script": "./src/index.js"
    }
};
