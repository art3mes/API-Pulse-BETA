import React, { useState } from "react";
import axios from "axios";


function QOTD(){
    const [quotes, setQuotes] = useState({});
    const [category, setCategory] = useState(""); // Use state to store selected category

    
    async function sendData() {
        try {
          // const response=await axios.post("http://localhost:3001/qotd", {
          const response=await axios.post("https://api-pulse-backend.onrender.com/qotd", {
            category:category
          });
          setCategory("yes");
          setQuotes(response.data[0]);
        } catch (error){
          console.error(error);
        }
    }
    return (
        <div className="qotd">
            <div className="qotdSearch">
                <button onClick={sendData}>
                <span >Quote</span>
            </button>
            </div>
            {quotes && category!=="" ?( 
                <div className="qotdBody">
                    <div>{quotes.quote} </div>
                    <div >- {quotes.author}</div>
                </div>
            ): <p></p>}
        </div>
    );
}

export default QOTD;