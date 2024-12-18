import promptSync from "prompt-sync";
const prompt = promptSync();

const age: number = Number(prompt("Enter your age: "));

const checkEligibility = (age: number) => {
  if (!age) return "Parameter must be a number greater than 0";
  if (age >= 18) {
    return "You are eligible to vote!";
  } else {
    return "OOps!! You are not eligible";
  }
};

console.log(checkEligibility(age));
