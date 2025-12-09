import path from "path";
import url from "url";

const filePath = "./dir1/dir2/demo.txt";

//basename()
console.log(path.basename(filePath));

//dirname()
console.log(path.dirname(filePath));

//extname()
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath)); //it will parse the file in to an object

//let's get the dir and filepath of our current file

const __filename = url.fileURLToPath(import.meta.url); // import.meta.url gives the current working file path
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);
//join()
const demoTxtPath1 = path.join(__dirname, "dir1", "dir2", "demo.txt"); // this will join the file paths

//resolve()
const demoTxtPath2 = path.resolve(__dirname, "dir1", "dir2", "demo.txt");

console.log(demoTxtPath1);
console.log(demoTxtPath2);
