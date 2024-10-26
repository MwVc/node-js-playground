const { log } = require("console");
const os = require("os");
const { createSecureContext } = require("tls");

const user = os.userInfo();

// Returns the system uptime in seconds
log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
