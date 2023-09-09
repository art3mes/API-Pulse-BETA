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
            <div className="qrSearch">
                <input className='searchBar' type="text" placeholder="Enter URL" onChange={handleChange} value={URL} />
                <button onClick={sendData}>
                    <span>submit</span>
                </button>
            </div>
            {qrURL && qrURL !== "error" ?( 
                <div className="qrImage">
                   <img src={qrURL} alt="QR "></img>
                </div>
            ): (qrURL==="error" ? <p className="error">Invalid URL</p>: <p></p>)}
        </div>
    );
}

export default QRCodeGenerator;