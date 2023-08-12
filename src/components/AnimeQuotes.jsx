import React, {useState} from 'react';
import axios from 'axios';

function AnimeQuote(){

    const [title, setTitle] = useState("");
    const [animeData, setAnimeData] = useState("");
    const [errorInfo, setError] = useState("");


    function handleChange(event) {
        const newValue = event.target.value;
        setTitle(newValue);
    }

    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/animequote", {
            title : title
          });
          //setQuote(response.data);
          console.log(response.data);
          setAnimeData(response.data);
        } catch (error){
            setError("No results found.");
            console.error(error);
        }
    }
    console.log(errorInfo);
    return (
        <div className="">
            <input type="text" onChange={handleChange}  />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
            
            {animeData && errorInfo.length === 0 ? ( 
                <div>
                    <p>anime: {animeData.anime} </p>
                    <p>character: {animeData.character}</p>
                    <p>quote: {animeData.quote}</p>
                </div>
            ): (<p>No record found.</p>)}
        </div>
    );
}

export default AnimeQuote;