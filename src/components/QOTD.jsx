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
        <div className="">
            {/* <p >Select category:</p> */}
            {/* <select id="quote" name="category" onChange={handleCategoryChange} >
                <option value="age">Age</option>
                <option value="alone">Alone</option>
                <option value="amazing">Amazing</option>
                <option value="anger">Anger</option>
                <option value="architecture">Architecture</option>
                <option value="art">Art</option>
                <option value="attitude">Attitude</option>
                <option value="beauty">Beauty</option>
                <option value="best">Best</option>
                <option value="birthday">Birthday</option>
                <option value="business">Business</option>
                <option value="car">Car</option>
                <option value="change">Change</option>
                <option value="communications">Communications</option>
                <option value="computers">Computers</option>
                <option value="cool">Cool</option>
                <option value="courage">Courage</option>
                <option value="dad">Dad</option>
                <option value="dating">Dating</option>
                <option value="death">Death</option>
                <option value="design">Design</option>
                <option value="dreams">Dreams</option>
                <option value="education">Education</option>
                <option value="environmental">Environmental</option>
                <option value="equality">Equality</option>
                <option value="experience">Experience</option>
                <option value="failure">Failure</option>
                <option value="faith">Faith</option>
                <option value="family">Family</option>
                <option value="famous">Famous</option>
                <option value="fear">Fear</option>
                <option value="fitness">Fitness</option>
                <option value="food">Food</option>
                <option value="forgiveness">Forgiveness</option>
                <option value="freedom">Freedom</option>
                <option value="friendship">Friendship</option>
                <option value="funny">Funny</option>
                <option value="future">Future</option>
                <option value="god">God</option>
                <option value="good">Good</option>
                <option value="government">Government</option>
                <option value="graduation">Graduation</option>
                <option value="great">Great</option>
                <option value="happiness">Happiness</option>
                <option value="health">Health</option>
                <option value="history">History</option>
                <option value="home">Home</option>
                <option value="hope">Hope</option>
                <option value="humor">Humor</option>
                <option value="imagination">Imagination</option>
                <option value="inspirational">Inspirational</option>
                <option value="intelligence">Intelligence</option>
                <option value="jealousy">Jealousy</option>
                <option value="knowledge">Knowledge</option>
                <option value="leadership">Leadership</option>
                <option value="learning">Learning</option>
                <option value="legal">Legal</option>
                <option value="life">Life</option>
                <option value="love">Love</option>
                <option value="marriage">Marriage</option>
                <option value="medical">Medical</option>
                <option value="men">Men</option>
                <option value="mom">Mom</option>
                <option value="money">Money</option>
                <option value="morning">Morning</option>
                <option value="movies">Movies</option>
                <option value="success">Success</option>
            </select> */}
            <button onClick={sendData}>
                <span >Refresh</span>
            </button>
            {quotes && category!=="" ?( 
                <div>
                    <p>quote: {quotes.quote} </p>
                    <p>author: {quotes.author}</p>
                </div>
            ): <p></p>}
        </div>
    );
}

export default QOTD;