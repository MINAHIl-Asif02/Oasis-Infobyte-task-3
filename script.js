function convertTemperature(){
    const inputTemperature = parseFloat(document.getElementById("num").value)
    const unit = document.getElementById("unit").value

    let convertedTemperature;

    if(unit == 'Celsius'){

        convertedTemperature = (inputTemperature * 9/5)+32
        document.getElementById("result").textContent = `${inputTemperature} degree Celsius = ${convertedTemperature} degree Fahrenhiet`

    }
    else if (unit === 'Fahrenhiet'){

        convertedTemperature = (inputTemperature-32)*5/9 ;
        document.getElementById("result").textContent = `${inputTemperature} degree Fahrenhiet = ${convertedTemperature} degree Celsius`
    }else{
        document.getElementById("result").textContent = 'Please Select = valid unit'
    }




}