import { useState } from "react";

// Parent component storing common state data
function Weather() { // copy to Weather.jsx
    // two separate state values to store weather data
    const [weather, setWeather] = useState('sunny');
    //const [tempCelcius, setTempCelcius] = useState(27);

    const[temp, setTemp] = useState(27);
    const[units, setUnits] = useState('C');

    // handler function to update both state values at once
    const handleWeatherChange = (newWeather, newTemp, units) => {
        setWeather(newWeather);
        //setTempCelcius(newTemp)
        setTemp(newTemp);
        setUnits(units);
    }

    return (
        <div className='Weather componentBox'>
            <h2>Today's Weather</h2>
            <div>
                <strong>{weather}</strong> with a temp of
                {/* Child component to display temp - needs temp value as prop */}
                {/*<Temperature temp={tempCelcius} units="C" />*/}
                <Temperature temp={temp} units={units} />
            </div>
            {/* Child component to update the weather - needs handler function as prop */}
            <CheckWeather onWeatherChange={handleWeatherChange} units={units} />
            <ConvertTemp onTempConvert={handleWeatherChange} weather={weather} temp={temp} units={units}/>
        </div>
    )
}
export default Weather;

// Child component to display and convert temp if needed
function Temperature({ temp, units = 'C' }) { // default to celcius
    // convert to Fahrenheit if units is F (or not C)
    //let displayTemp = units === 'C' ? temp : (temp * 9 / 5) + 32

    return (
        <span className="Temperature">
            <strong> {parseInt(temp)}&deg;{units} </strong>
        </span>
    )
}
// ++ Try adding a button to convert between C and F temps

// Child component - receives parent state handler via props
// child component is controlled - does not contain any states of their own
function CheckWeather({onWeatherChange, units}) {
    const weatherTypes = ['sunny', 'windy', 'raining', 'cloudy', 'storm', 'heatwave'];
    // generates new random weather data and updates state via prop
    const randomWeather = () => {
        let newTemp = Math.floor(Math.random() * 40);
        let newWeatherIndex = Math.floor(
            Math.random() * weatherTypes.length);
            
        // ++ try to destructure this function from the props object
        //props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp, units); -> worked when only sending props:CheckWeather(props). Updated to include units for temp conversion funciton
        //.onWeatherChange is the equivalent of handleWeatherChange in the parent
        onWeatherChange(weatherTypes[newWeatherIndex], newTemp, units);
    }
    return (
        <button onClick={randomWeather}>Check Weather</button>
    )
}
// ++ Add some more weather types of your own

function ConvertTemp({onTempConvert, weather, temp, units}){

    const convertTemp = () => {
        let newTemp = temp;
        let newUnits = units;

        if(newUnits=='C'){
            newTemp = (newTemp * 9 / 5) + 32;
            newUnits = 'F';
        }
        else if(newUnits == 'F')
        {
            newTemp = (newTemp-32) * 5/9;
            newUnits = 'C';
        }
        onTempConvert(weather, newTemp, newUnits);
    }

    return(
        <button onClick={convertTemp}>Convert</button>
    )
}