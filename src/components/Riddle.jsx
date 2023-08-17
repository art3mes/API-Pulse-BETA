import React, {useState} from "react";
import axios from 'axios';

function QRCodeGenerator(){
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
   
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/riddle", {
          });
          console.log(response.data[0]);
          setTitle(response.data[0].title);
          setQuestion(response.data[0].question);
          setAnswer(response.data[0].answer);
        } catch (error){
          console.error(error);
        }
    }
    return (
        <div className="">
            <button onClick={sendData}>
                <span >Refresh</span>
            </button>
            {title && title!=="" ?( 
                <div>
                    <p>title: {title} </p>
                    <p>question: {question}</p>
                    <p>{answer}</p>
                </div>
            ): <p></p>}
        </div>
    );
}

export default QRCodeGenerator;