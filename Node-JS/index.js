//common js is outdated so we use modules - more convinient
// const generateRandomNumber = require("./utils")
import greetings, {
  generateRandomNumber,
  celciusToFarenheight,
  //
} from "./utils.js";

console.log(generateRandomNumber()); // we are using the function(AKA- Module) as a common js format

console.log(greetings("Kamran"));

console.log(celciusToFarenheight(40));
