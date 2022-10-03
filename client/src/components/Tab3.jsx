import React from "react";
import soundPic from "../assets/sound2.gif"
import MediaDisplay from "./mediaDisplay";
const Tab3 = () =>{

    return(
        <div className="profilebody3">
            <MediaDisplay audioUrl='Kalimba.mp3'/>
            <MediaDisplay audioUrl='sipsip.mp3'/>
            <MediaDisplay audioUrl='ChorusDancer .mp3'/>
            <MediaDisplay audioUrl='Locura.mp3'/>
        </div>
    )
}

export default Tab3;