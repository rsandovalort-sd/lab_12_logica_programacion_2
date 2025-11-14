function convertirGrados(){
    let grados = parseFloat(document.getElementById("celsius").value);
    if (isNaN(grados)){
        alert("Ingresa un número valido")
        return;
    }
    let fahrenheit = (grados * 1.8) + 32
    let kelvin = grados + 273.15
    
    document.getElementById("resultado").innerHTML = `
        <p>Conversión a: </p> 
        <ul>
            <li>Kelvin: ${kelvin} °K</li>
            <li>Farenheit: ${fahrenheit} °F</li>
        </ul>`

}