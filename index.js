const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// Initialize object

const myEmitter = new MyEmitter();

setTimeout(() => {
  // Emit Event
  myEmitter.emit("log", "Log event emitted");
}, 2000);

// add a listener to the log events
myEmitter.on("log", (msg) => logEvents(msg));
