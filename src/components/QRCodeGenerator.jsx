import React, { useState } from "react";
import axios from 'axios';

function QRCodeGenerator(){
    const [URL,setURL]= useState("");
    const [qrURL, setQRURL] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setURL(newValue);
    }
    
    async function sendData() {
        try {
          const response=await axios.post("http://localhost:3001/qrcodegenerator", {
            URL:URL
          });
          setQRURL(response.data);
        } catch (error){
          console.error(error);
        }
    }
    return (
        <div className="qr">
            <input className='searchBar' type="text" placeholder="Enter URL" onChange={handleChange} value={URL} />
            <button onClick={sendData}>
                <span>submit</span>
            </button>
            {qrURL && qrURL !== "error" ?( 
                <div>
                   <img src={qrURL} alt="QR "></img>
                </div>
            ): (qrURL==="error" ? <p>Invalid URL</p>: <p></p>)}
        </div>
    );
}

export default QRCodeGenerator;