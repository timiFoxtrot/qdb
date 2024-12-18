const prompt = require("prompt-sync")();

const number = Number(prompt("Enter a number: "));

const checkRange = (number) => {
  if (isNaN(number)) return "Parameter must be a number";
  let output = number >= 10 && number <= 20 ? 'Valid' : 'Invalid'
  return output
};

console.log(checkRange(number))
