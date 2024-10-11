const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// Initialize object

const myEmitter = new MyEmitter();

// add a listener to the log events
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit Event
  myEmitter.emit("log", "Log event emitted");
}, 2000);
