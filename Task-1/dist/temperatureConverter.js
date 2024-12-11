"use strict";
const tempConverter = (temp, unit) => {
    let tempF;
    if (unit.toLowerCase() === "c") {
        tempF = ((temp * (9 / 5)) + 32 + 'ºF');
    }
    else if (unit.toLowerCase() === "f") {
        tempF = ((temp - 32) * (5 / 9) + 'ºC');
    }
    else
        return 'invalid unit';
    return tempF;
};
console.log(tempConverter(30, 'c'));
