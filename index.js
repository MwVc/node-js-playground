// const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );

    console.log(data);

    // unlink deletes files
    await fsPromises.unlink(path.join(__dirname, "files", "test.txt"));

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nYeah whatever man"
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "renamedByPromises.txt"
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "/", "renamedByPromises.txt"),
      "utf-8"
    );

    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

//Read files

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// Write files

// fs.writeFile(
//   path.join(__dirname, "files", "lorem.txt"),
//   "I am going to be a remote backend developer by 2024",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "lorem.txt"),
//       "\n\nTrying to append a file. If youre seeing this then its a succes",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");
//       }
//     );
//   }
// );

// Appending a file
// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"),
//   "Trying to append a file. If youre seeing this then its a succes",
//   (err) => {
//     if (err) throw err;
//     console.log("Append complete");
//   }
// );

// exit on uncaught errors
// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// });
