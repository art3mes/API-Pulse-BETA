import React, {useState} from "react";
import axios from 'axios';

function QRCodeGenerator(){
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/riddle", {
          });
          console.log(response.data[0]);
          setTitle(response.data[0].title);
          setQuestion(response.data[0].question);
          setAnswer(response.data[0].answer);
          setShowAnswer(false);
        } catch (error){
          console.error(error);
        }
    }
    const handleButtonClick = () => {
        setShowAnswer(!showAnswer);
    };
    return (
        <div className="riddle">
            <button className="riddleSubmit" onClick={sendData}>
                <span >Click for a Question</span>
            </button>
            {title && title!=="" ?( 
                <div>
                    <p>title: {title} </p>
                    <p>question: {question}</p>
                    {showAnswer && <p>{answer}</p>}
                    <button onClick={handleButtonClick}>Reveal Answer</button>
                </div>
            ): <p></p>}
        </div>
    );
}

export default QRCodeGenerator;