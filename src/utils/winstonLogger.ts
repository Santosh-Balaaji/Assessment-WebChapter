import winston from 'winston';

// define the custom settings for each transport (file, console)
const options = {
  console: {
    level: process.env.NODE_ENV !== 'production' ? 'debug' : 'error', // info, error, debug, warn
    handleExceptions: true,
    json: true,
    colorize: true,
    prettyPrint: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
});

export default logger;
