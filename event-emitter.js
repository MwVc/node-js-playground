const eventEmitter = require("events");

const myEvent = new eventEmitter();

myEvent.on("start", function () {
  console.log("Fill me up");
  console.log("event started");
});

myEvent.emit("start");
