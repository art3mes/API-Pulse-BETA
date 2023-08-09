import React from "react";
import weatherAPI from "./weather";

function Grid(){
    return (
        <div className="main-grid">
            <div className="grid-item">
                {weatherAPI()}
            </div>
            <div className="grid-item">Two</div>
            <div className="grid-item">Three</div>
            <div className="grid-item">Four</div>
            <div className="grid-item">Five</div>
        </div>
    );
}
export default Grid;