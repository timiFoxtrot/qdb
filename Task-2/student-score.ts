import promptSync from "prompt-sync";
const prompt = promptSync();

const score: number = Number(prompt("Enter score: "));

const checkScore = (score: number) => {
  if (isNaN(score)) return "Parameter must be a number";

  let output = score >= 50 ? "Passed" : "Failed";
  return output;
};

console.log(checkScore(score));
