import React, {useState} from 'react';
import axios from 'axios';

function Semantic(){

    const [text, setText]= useState("");
    const [score, setScore]=useState("");
    const [sentiment, setSentiment]=useState("");
    const [resText, setResText]=useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
    }
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/semantic", {
            text:text
          });
          setScore(response.data.score);
          setSentiment(response.data.sentiment);
          setResText(response.data.text);
        } catch (error){
            console.error(error);
        }
    }

    return (
        <div className="semantic">
            <div className='animeSearch'>
                <input className='searchBar' type="text" placeholder='Enter text to do Semantic Analysis' onChange={handleChange}  />
                <button onClick={sendData}>
                    <span>Analyse</span>
                </button>
            </div>
            <div className="">
            {sentiment && sentiment!=="" ?( 
                <div>
                    <p className=""><strong>Score: </strong>{score}</p>
                    <p className=""><strong>Text: </strong>{resText}</p>
                    <p className=""><strong>Sentiment: </strong>{sentiment}</p>
                </div>
            ): <p></p>}
        </div>
        </div>
    );
}

export default Semantic;