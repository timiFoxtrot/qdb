import promptSync from "prompt-sync";
const prompt = promptSync();

const name: string = prompt("Enter your age: ");

const greet = (name: string | null) => {
  if (!name || name === null) return "No name provided";
  return `Hello ${name}`;
};

console.log(greet(name));
