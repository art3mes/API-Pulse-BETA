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
        <div className="weather">
            <div className='weatherSearch'>
                <input className='searchBar' type="text" placeholder='Enter City' onChange={handleChange} value={cityName} />
                <button onClick={sendData}>
                    <span>submit</span>
                </button>
            </div>
            {weatherInfo && ( // Conditionally render weather information
                <div className='weatherInfo'>
                    <p className='temp'>{weatherInfo.temp} °C</p>
                    <p className='desc'>{weatherInfo.desc}</p>
                    <img className='weatherImage' src={weatherInfo.imageURL} alt={weatherInfo.desc} />
                </div>
            )}
        </div>
    );
}

export default WeatherAPI;