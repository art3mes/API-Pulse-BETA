import React, {useState} from 'react';
import axios from 'axios';

function Semantic(){

    const [text, setText]= useState("");
    const [score, setScore]=useState("");
    const [sentiment, setSentiment]=useState("");

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
          setScore(response.data.score);
          setSentiment(response.data.sentiment);
          console.log(sentiment);
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
            <div className="">
            {sentiment && sentiment!=="" ?( 
                <div>
                    {/* <p>title: {title} </p> */}
                    <p className=""><strong>Score: </strong>{score}</p>
                    <p className=""><strong>Text: </strong>{text}</p>
                    <p className=""><strong>Sentiment: </strong>{sentiment}</p>
                </div>
            ): <p></p>}
        </div>
        </div>
    );
}

export default Semantic;