const { error } = require("node:console");
const fs = require("node:fs");
const http = require("https");

const content =
  "I am going to get $70,000 a year salary as a remote backend web developer";

// Asynchronous
// fs.writeFile("./content/third.txt", content, (error) => {
//   error && console.error(error);
// });

// Synchronously
// try {
//   fs.writeFileSync("./content/third.txt", content);
// } catch (error) {
//   console.log(error);
// }

// Using Promise based
async function promiseBasedFileWriting() {
  try {
    await fs.writeFile("./content/third.txt", content, { flag: "a+" });
  } catch (error) {
    console.log(error);
  }
}
