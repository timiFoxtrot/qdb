import promptSync from "prompt-sync";
const prompt = promptSync();

const day: number = Number(prompt("Enter a number: "));

const dayOfTheWeek = (day: number) => {
  if (!day) return "Parameter must be a number greater than 0";
  let output: string;

  switch (day) {
    case 1:
      output = "Sunday";
      break;
    case 2:
      output = "Monday";
      break;
    case 3:
      output = "Tuesday";
      break;
    case 4:
      output = "Wednesday";
      break;
    case 5:
      output = "Thursday";
      break;
    case 6:
      output = "Friday";
      break;
    case 7:
      output = "Saturday";
      break;
    default:
      output = "Invalid day";
      break;
  }

  return `The day is ${output}`;
};

console.log(dayOfTheWeek(day))
