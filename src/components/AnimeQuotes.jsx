import React, {useState} from 'react';
import axios from 'axios';

function AnimeQuote(){

    const [title, setTitle] = useState("");
    const [animeData, setAnimeData] = useState("");
    //const [errorInfo, setError] = useState("");
    let err = "";
    

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
          //err = response.data.error;
          console.log(response.data);
          setAnimeData(response.data);
          setTitle(response.data.anime);
        } catch (error){
            err = error   //error of axiom, not of the api
            console.error(err);
        }
    }

    return (
        <div className="animeQuotes">
            <input className='searchBar' type="text" placeholder='Enter name of the Anime' onChange={handleChange}  />
            <button onClick={sendData}>
                <span>Search</span>
            </button>
            
            {animeData && title.length !==0 && err.length === 0 ?( 
                <div>
             
                    <p>anime: {animeData.anime} </p>
                    <p>character: {animeData.character}</p>
                    <p>quote: {animeData.quote}</p>
                </div>
            ): <p>{err}</p>}
        </div>
    );
}

export default AnimeQuote;