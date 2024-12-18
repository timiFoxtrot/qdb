const prompt = require("prompt-sync")();

const length = Number(prompt("Enter rectangle length: "));
const width = Number(prompt("Enter rectangle width: "));
const threshold = 100;

const area = (length, width) => {
  if (isNaN(length) || isNaN(width)) return "Parameter must be a number";
  if (!length || !width) return "Provide a number greater than 0";

  const result = length * width;

  let output =
    result > threshold
      ? `Area ${result} is above threshold`
      : result < threshold
      ? `Area ${result} is below threshold`
      : `Area ${result} is equal to threshold`;

  return output;
};

console.log(area(length, width));
