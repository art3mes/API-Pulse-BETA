import React, {useState} from 'react';
import axios from 'axios';

function Semantic(){

    const [text, setText]= useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
    }
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/semantic", {
            text:text
          });
          console.log(response.data);
        } catch (error){
            console.error(error);
        }
    }

    return (
        <div className="animeQuotes">
            <div className='animeSearch'>
                <input className='searchBar' type="text" placeholder='Enter text to do Semantic Analysis' onChange={handleChange}  />
                <button onClick={sendData}>
                    <span>Search</span>
                </button>
            </div>
            
        </div>
    );
}

export default Semantic;