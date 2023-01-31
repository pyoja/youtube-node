const { createLogger, transports, format } = require("winston");
const { combine, timestamp, json, simple, colorize, printf, label } = format;

const printLogFormat = combine(
  label({
    label: "백앤드 맛보기",
  }),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd",
  }),
  printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
  })
);

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "access.log",
      dirname: "./logs",
      level: "info",
      format: printLogFormat,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      level: "info",
      format: printLogFormat,
    })
  );
}

module.exports = logger;
