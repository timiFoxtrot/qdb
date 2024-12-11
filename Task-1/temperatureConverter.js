const tempConverter = (temp, unit) => {
    if (!temp || !unit) return 'Provide missing parameter'
    let tempF
    if (unit.toLowerCase() === "c") {
        tempF = ((temp * (9/5)) + 32 + 'ºF')
    } else if (unit.toLowerCase() === "f") {
        tempF = ((temp - 32) * (5/9) + 'ºC')
    }
    return tempF
}

console.log(tempConverter(30))