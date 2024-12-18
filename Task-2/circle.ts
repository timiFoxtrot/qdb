import promptSync from "prompt-sync";
const prompt = promptSync();

const radius: number = Number(prompt("Enter radius: "));

const circleArea = (radius: number) => {
    if(!radius) return 'Parameter must be a number greater than 0'
    return `Area is ${Math.PI * radius**2}`
}

console.log(circleArea(radius))