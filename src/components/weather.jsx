import React, {useState} from 'react';
import axios from 'axios';

function WeatherAPI(){

    const [cityName, setCityName] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setCityName(newValue);
    }
    let weatherInfo={};
    async function sendData() {
        try {
          const data=await axios.post("http://localhost:3001/", {
            //await axios.post("https://keeper-app-backend-dyr1.onrender.com", {
            cityName:cityName
          });
          weatherInfo=data.data
          console.log(weatherInfo);
        } catch (error){
          console.error(error);
        }
    }

    return (
        // <form action="/weather" method="post">
        //     <label for="cityInput">CITY NAME: </label>
        //     <input type="text" id="cityInput" name="cityName"/>
        //     <button type="submit" onClick={sendData()} >GO</button>
        // </form>
        <div className="form">
            <p>Enter City:</p>
            <input type="text" onChange={handleChange} value={cityName} />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
        </div>
    );
}

export default WeatherAPI;