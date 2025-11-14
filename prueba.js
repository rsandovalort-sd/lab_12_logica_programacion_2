const prompt = require("prompt-sync")();

let grados = Number(prompt("Ingrese los grados celsius: "))

function convertirGrados(){
    let farenheit = (grados * 1.8) + 32
    let kelvin = grados + 273.15
    return `Conversión:
A Farenheit: ${farenheit}
A Kelvin: ${kelvin}` 
} 

console.log(convertirGrados()) 
