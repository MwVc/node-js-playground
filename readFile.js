const fs = require("fs").promises;

// fs.readFile("./content/first.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(data);
// });

async function readingFile() {
  try {
    const data = await fs.readFile("./content/result-sync.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readingFile();
