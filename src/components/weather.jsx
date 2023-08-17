import React, {useState} from 'react';
import axios from 'axios';

function WeatherAPI(){

    const [cityName, setCityName] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null);

    function handleChange(event) {
        const newValue = event.target.value;
        setCityName(newValue);
    }
    
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/weather", {
            cityName:cityName
          });
          setWeatherInfo(response.data);
        } catch (error){
          console.error(error);
        }
    }
    return (
        <div className="">
            <input type="text" placeholder='Enter City' onChange={handleChange} value={cityName} />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
            {weatherInfo && ( // Conditionally render weather information
                <div>
                    <p>Temperature: {weatherInfo.temp} °C</p>
                    <p>Weather: {weatherInfo.desc}</p>
                    <img src={weatherInfo.imageURL} alt={weatherInfo.desc} />
                </div>
            )}
        </div>
    );
}

export default WeatherAPI;