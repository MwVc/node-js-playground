const path = require("path");
const fs = require("fs");
console.log(__dirname);
const filePath = path.resolve(
  __dirname,
  "interactingWithFileSystem",
  "subfolder",
  "text.txt"
);

try {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}
