import React from "react";
import WeatherAPI from "./weather";
import AnimeQuote from "./AnimeQuotes";
import QRCodeGenerator from "./QRCodeGenerator"
import QOTD from "./QOTD";
import Riddle from "./Riddle";

function Grid(){
    return (
        <div className="main-grid">
            <div className="grid-item">
                <WeatherAPI />
            </div>
            <div className="grid-item">
                <AnimeQuote />
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