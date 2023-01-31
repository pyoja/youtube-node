"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`${PORT}번 서버로 가동중입니다`);
  // console.log("서버 가동");
});
