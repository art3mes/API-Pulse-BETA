import React from "react";
import WeatherAPI from "./weather";
import AnimeQuote from "./AnimeQuotes";

function Grid(){
    return (
        <div className="main-grid">
            <div className="grid-item">
                <WeatherAPI />
            </div>
            <div className="grid-item">
                <AnimeQuote />
            </div>
            <div className="grid-item">Three</div>
            <div className="grid-item">Four</div>
            <div className="grid-item">Five</div>
        </div>
    );
}
export default Grid;