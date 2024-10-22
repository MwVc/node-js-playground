// fs module
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  "This is as a result of writeFileSync"
);

// For appending

writeFileSync(
  "./content/result-sync.txt",
  "I am going to become a remote backend web developer",
  { flag: "a" }
);
