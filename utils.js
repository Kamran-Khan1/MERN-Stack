const generateRandomNumber = () => {
  // It will generate a random number between 1 - 100
  return Math.floor(Math.random() * 100) + 1;
};

const celciusToFarenheight = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

export default function (name) {
  return `Hello ${name}`;
}

// module.exports = generateRandomNumber; //-> common js exports

export { generateRandomNumber, celciusToFarenheight };
