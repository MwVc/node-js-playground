const { readFile, writeFile, writeFileSync, readFileSync } = require("fs");

// CALLBACK HELL
// readFile("./content/first.txt", "utf8", (error, resolve) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const firstText = resolve;
//   console.log(firstText);

//   readFile("./content/second.txt", "utf8", (error, resolve) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     const second = resolve;
//     console.log(second);

//     writeFile(
//       "./content/result-sync.txt",
//       "I am going to become a remote backend web developer",
//       { flag: "a" }, // appends to the file
//       (error, resolve) => {
//         if (error) {
//           console.log(error);
//           return;
//         }

//         console.log(resolve);
//       }
//     );
//   });
// });

console.log("start");
const first = readFile("./content/first.txt", "utf-8", (error, result) => {
  console.log(result);
});

console.log("Done with the task");
