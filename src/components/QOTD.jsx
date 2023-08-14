import React, { useState } from "react";
import axios from "axios";


function QOTD(){
    const [quotes, setQuotes] = useState({});
    const [category, setCategory]= useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setCategory(newValue);
    }
    
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/qotd", {
            category:category
          });
          setQuotes(response.data[0]);
          //console.log(quotes);
        } catch (error){
          console.error(error);
        }
    }
    return (
        <div className="">
            <p>Choose category:</p>
            <input type="dropdown" onChange={handleChange} value={category} />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
            {quotes &&( 
                <div>
                    <p>quote: {quotes.quote} </p>
                    <p>author: {quotes.author}</p>
                </div>
            )}
        </div>
    );
}

export default QOTD;