import React, { useState } from "react";
import axios from "axios";


function QOTD(){
    const [body,setBody]= useState("");
    const [category, setCategory]= useState("")

    function handleChange(event) {
        const newValue = event.target.value;
        setCategory(newValue);
    }
    
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/qotd", {
            category:category
          });
          setBody(response.data);
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
            {body}
        </div>
    );
}

export default QOTD;