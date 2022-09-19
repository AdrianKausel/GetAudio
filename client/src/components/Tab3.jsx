import React from "react";
import soundPic from "../assets/sound2.gif"
const Tab3 = () =>{

    return(
        <div className="profilebody3">
            <div className="mediacont">
                <div className="profilecol4">
                    <img className="soundpics" src={soundPic}/>
                </div>
                <div className="profilecol5">
                    <ul>
                        <h3 className="songsSpecs"> Artist Name:</h3>
                        <h3 className="songsSpecs"> Song Name:</h3>
                    </ul>
                </div>
            </div>
            <div className="mediacont">
                <div className="profilecol4">
                    <img className="soundpics" src={soundPic}/>
                </div>
                <div className="profilecol5">
                    <ul>
                        <h3 className="songsSpecs"> Artist Name:</h3>
                        <h3 className="songsSpecs"> Song Name:</h3>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab3;