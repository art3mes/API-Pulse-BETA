import React from "react";
import WeatherAPI from "./weather";
import Agify from "./agify";

function Grid(){
    return (
        <div className="main-grid">
            <div className="grid-item">
                <WeatherAPI />
            </div>
            <div className="grid-item">
                <Agify />
            </div>
            <div className="grid-item">Three</div>
            <div className="grid-item">Four</div>
            <div className="grid-item">Five</div>
        </div>
    );
}
export default Grid;