import promptSync from "prompt-sync";
const prompt = promptSync();

const temp: string = prompt("Enter temperature value: ");
const unit: string = prompt(
  'Choose conversion: "C" for Celsius to Fahrenheit, "F" for Fahrenheit to Celsius: '
);

const tempConverter = (temp: number, unit: string) => {
  let tempF: string;
  if (unit.toLowerCase() === "c") {
    tempF = temp * (9 / 5) + 32 + "ºF";
  } else if (unit.toLowerCase() === "f") {
    tempF = (temp - 32) * (5 / 9) + "ºC";
  } else return "invalid unit";
  return `Converted temperature: ${tempF}`;
};

console.log(tempConverter(Number(temp), unit));
