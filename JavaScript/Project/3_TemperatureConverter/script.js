
const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (Celsius) => {
        let fahrenheit = Math.round((Celsius * 9 / 5) + 32);
        return fahrenheit;
    }

    const fehToCel = (Fahrenheit) => {
        let Celsius = Math.round((Fahrenheit - 32) * 5 / 9);
        return Celsius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }
}