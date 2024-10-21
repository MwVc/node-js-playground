// GLOBALS - NO WINDOW !!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules(CommonJS)
// modules      - info about current module(file)
// process      - info about enviroment where the program is being executed

// const names = require("./names");
// const sayHi = require("./module_one");
// const data = require("./module_two");

// OS MODULE
const os = require("os");

// Info about the user
const user = os.userInfo();

// How long the system uptime in seconds
const uptime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};

// PATH MODULE
const path = require("path");
console.log(path.join());
