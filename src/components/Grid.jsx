import React from "react";
import WeatherAPI from "./weather";
import QRCodeGenerator from "./QRCodeGenerator"
import QOTD from "./QOTD";
import Riddle from "./Riddle";
import Semantic from "./Semantic";

function Grid(){
    return (
        <div className="main-grid">
            <div className="grid-item">
                <WeatherAPI />
            </div>
            <div className="grid-item">
                <Semantic />
            </div>
            <div className="grid-item">
                <QRCodeGenerator />
            </div>
            <div className="grid-item">
                <QOTD />
            </div>
            <div className="grid-item">
                <Riddle />
            </div>
        </div>
    );
}
export default Grid;