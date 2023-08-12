import React, {useState} from 'react';
import axios from 'axios';

function AnimeQuote(){

    const [title, setTitle] = useState("");
    const [animeData, setAnimeData] = useState("");


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
          console.error(error);

        }
    }

    return (
        <div className="">
            <input type="text" onChange={handleChange}  />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
        <div>
               
            </div>
            {animeData && ( 
                <div>
                    <p>anime: {animeData.anime} </p>
                    <p>character: {animeData.character}</p>
                    <p>quote: {animeData.quote}</p>
                </div>
            )}
            
        </div>
    );
}

export default AnimeQuote;