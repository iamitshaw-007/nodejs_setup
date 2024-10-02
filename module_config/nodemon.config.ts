export const nodemonConfig = {
    /* Basic Configuration */
    watch: ["src"] /* List of files or directories to watch for changes. */,
    ext: "js,json" /* Extensions to watch. */,
    ignore: [
        "node_modules",
        "dist",
    ] /* List of files or directories to ignore. */,
    exec: "node ./src/index.js" /* Command to execute when files change. */,

    /* Advanced Configuration */
    delay: "2500" /* Delay restarting by this amount (in milliseconds). */,
    verbose: true /* Show detailed log messages from Nodemon. */,
    legacyWatch:
        true /* Use polling to watch for file changes (useful in some networked environments). */,
    signal: "SIGHUP" /* Signal to send to the process on restart. */,
    restartable:
        "rs" /* Specify a key sequence that will restart the application. */,

    /* Environment Variables */
    env: {
        NODE_ENV:
            "development" /* Set environment variables for the process. */,
        DEBUG: "app:*" /* Enable debug logging for the app namespace. */,
    },

    /* Events */
    events: {
        restart:
            "echo 'App restarted due to changes'" /* Command to execute when the app restarts. */,
        crash: "echo 'App crashed'" /* Command to execute when the app crashes. */,
        exit: "echo 'App exited'" /* Command to execute when the app exits. */,
        start: "echo 'App has started'" /* Command to execute when the app starts. */,
        stdout: "echo 'stdout data'" /* Command to execute when stdout data is received. */,
    },

    /* Legacy Support */
    watch_interval: 1000 /* Polling interval (in milliseconds) for legacy support. */,
    execMap: {
        js: "node" /* Mapping of file extensions to executables. */,
        py: "python",
    },

    /* Additional Options */
    stdout: true /* Enable or disable stdout output. */,
    stdin: true /* Enable or disable stdin input. */,
    runOnChangeOnly:
        false /* Only restart the app if a watched file changes. */,
    cwd: "." /* Current working directory for the process. */,
    execArgs: ["--inspect"] /* Arguments to pass to the exec command. */,
    colours: true /* Enable or disable colour output. */,
    dump: true /* Output the config options to console. */,
    configFile:
        "path/to/nodemon.json" /* Specify a custom path to the Nodemon config file. */,
    quiet: false /* Minimize the amount of output. */,
    restartDelay: 0 /* Delay before restarting the app (in milliseconds). */,
    restartTries: 0 /* Number of restart attempts before giving up. */,
    monitor: ["src/**/*"] /* Glob patterns to monitor for changes. */,
    execOptions: {
        exec: "node" /* Command to run the application. */,
        ext: "js,json" /* Extensions to watch. */,
        script: "./src/index.js" /* Script to run. */,
    },
};
