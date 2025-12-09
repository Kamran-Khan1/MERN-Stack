// import fs from "fs";
import fs from "fs/promises";
// fs readFile()- callback
// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs readFileSync() - blocking
// const data = fs.readFileSync("./demo.txt", "utf-8");
// console.log(data);

//fs readfile promise version
fs.readFile("./demo.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//fs async and await version
const readData = async () => {
  try {
    const data = await fs.readFile("./demo.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// So these are the 4 methods that we can use to read data from a file
//Write file -> async and await method

const writeData = async () => {
  try {
    await fs.writeFile("./demo.txt", "Now I changed the Data 🤯");
  } catch (err) {
    console.log(err);
  }
};

// Write file method will change the whole data from the file
//solution append
const appendData = async () => {
  try {
    await fs.appendFile("./demo.txt", "\nThis data is appended");
  } catch (error) {
    console.log(error);
  }
};

appendData();
readData();
