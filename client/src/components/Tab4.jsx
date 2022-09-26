import React from "react";
import profilePic from "../assets/profile4.png"

const Tab4 = () =>{

    return(
        <div className="profilebody2">
            <div className="profilecol1">
                <ul>
                    <h3 className="profiletitle"> Name:</h3>
                    <h3 className="profiledescriptions"> Artist name: </h3>
                    <h3 className="profiledescriptions"> email: </h3>
                    <h3 className="profiledescriptions"> Password:</h3>
                </ul>
            </div>
            <div className="profilecol2">
                <img className="profilepics" src={profilePic}/>
            </div>
        </div>
    )
}

export default Tab4;