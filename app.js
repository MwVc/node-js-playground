const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data received. Name: ${name}, Age: ${age}`);
});

customEmitter.on("response", (name, id) => {
  console.log(name, id);
});

customEmitter.emit("response", "john", 34);
