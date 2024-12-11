const prompt = require('prompt-sync')();

const temp = prompt('Enter temperature value: ')
const unit = prompt('Choose conversion: "C" for Celsius to Fahrenheit, "F" for Fahrenheit to Celsius: ')

const tempConverter = (temp, unit) => {
    if (!temp || !unit) return 'Provide missing parameter'
    let tempF
    if (unit.toLowerCase() === "c") {
        tempF = ((temp * (9/5)) + 32 + 'ºF')
    } else if (unit.toLowerCase() === "f") {
        tempF = ((temp - 32) * (5/9) + 'ºC')
    } else return 'invalid unit'
    return `Converted temperature: ${tempF}`
}

console.log(tempConverter(temp, unit))