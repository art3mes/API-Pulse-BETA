import React, {useState} from 'react';
import axios from 'axios';

function WeatherAPI(){

    const [cityName, setCityName] = useState("");
    let weatherInfo={1:'aw'};

    function handleChange(event) {
        const newValue = event.target.value;
        setCityName(newValue);
    }
    
    async function sendData() {
        try {
          const data=await axios.post("http://localhost:3001/", {
            cityName:cityName
          });
          weatherInfo=data.data
          console.log(weatherInfo);
        } catch (error){
          console.error(error);
        }
    }
    function show(){
        return weatherInfo.temp;
    }
    return (
        <div className="form">
            <p>Enter City:</p>
            <input type="text" onChange={handleChange} value={cityName} />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
            <p>{show()}</p>
        </div>
    );
}

export default WeatherAPI;