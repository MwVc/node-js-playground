// How Node.js differ fromm Vanilla JS
//      1. Node runs on a server - not in a browser (backedn not frontend)
//      2. The console is the terminal window
//      3. There is a global object instead of a window object
//      4. CommonJS modules instead of ES6 modules
//      5. Missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const { add, subtract, divide, modulo } = require("./math");

console.log(modulo(9, 8));

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
