function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let outputDiv = document.getElementById("output");
    
    let convertedValues;
    if (unit === 'celsius') {
        let fahrenheit = (temperature * 9/5) + 32;
        let kelvin = temperature + 273.15;
        convertedValues = `Equivalent temperatures:\nFahrenheit: ${fahrenheit.toFixed(2)}\nKelvin: ${kelvin.toFixed(2)}`;
    } else if (unit === 'fahrenheit') {
        let celsius = (temperature - 32) * 5/9;
        let kelvin = (temperature - 32) * 5/9 + 273.15;
        convertedValues = `Equivalent temperatures:\nCelsius: ${celsius.toFixed(2)}\nKelvin: ${kelvin.toFixed(2)}`;
    } else if (unit === 'kelvin') {
        let celsius = temperature - 273.15;
        let fahrenheit = (temperature - 273.15) * 9/5 + 32;
        convertedValues = `Equivalent temperatures:\nCelsius: ${celsius.toFixed(2)}\nFahrenheit: ${fahrenheit.toFixed(2)}`;
    } else {
        convertedValues = "Invalid unit. Please select a unit of measurement.";
    }
    
    outputDiv.textContent = convertedValues;
}
