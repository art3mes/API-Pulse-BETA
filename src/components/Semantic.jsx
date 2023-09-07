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
            {/* {sentiment && sentiment!=="" ?(  */}
                <div className='semanticBody'>
                    <p className="score"><strong>Score: </strong>-451</p>
                    <p className="text"><strong>Text: </strong>yes</p>
                    <p className="sentiment"><strong>Sentiment: </strong>weak positibe</p>
                </div>
            {/* ): <p></p>} */}
        </div>
        </div>
    );
}

export default Semantic;