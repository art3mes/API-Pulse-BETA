import React, { useState } from "react";
import axios from "axios";


function QOTD(){
    const [quotes, setQuotes] = useState({});
    const [category, setCategory] = useState(""); // Use state to store selected category

    
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/qotd", {
            category:category
          });
          setCategory("yes");
          setQuotes(response.data[0]);
          //console.log(quotes);
        } catch (error){
          console.error(error);
        }
    }
    
      // Handle category selection change
    // function handleCategoryChange(event) {
    //     console.log(event.target.value);
    //     setCategory(event.target.value);
    // }
    return (
        <div className="qotd">
            <button onClick={sendData}>
                <span >Quote</span>
            </button>
            {quotes && category!=="" ?( 
                <div className="qotdBody">
                    <div>quote: {quotes.quote} </div>
                    <div >author: {quotes.author}</div>
                </div>
            ): <p></p>}
        </div>
    );
}

export default QOTD;