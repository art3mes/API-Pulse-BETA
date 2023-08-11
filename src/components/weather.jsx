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
          //console.log(weatherInfo);
        } catch (error){
          console.error(error);
        }
    }
    return (
        <div className="form">
            <p>Enter City:</p>
            <input type="text" onChange={handleChange} value={cityName} />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
            {weatherInfo && ( // Conditionally render weather information
                <div>
                    <p>Temperature: {weatherInfo.temp}</p>
                    <p>Weather: {weatherInfo.desc}</p>
                    <img src={weatherInfo.imageURL} alt={weatherInfo.desc} />
                    {/* Add more weather properties here */}
                </div>
            )}
        </div>
    );
}

export default WeatherAPI;