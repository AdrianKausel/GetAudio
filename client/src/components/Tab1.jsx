import React from "react";
import { useContext } from "react";
import profilePic from "../assets/profile1.png"
import NavBarContext from "../context/NavBarContext";



const Tab1 = () =>{

    const context= useContext(NavBarContext)

    return(
        <div className="profilebody2">
            <div className="profilecol1">
                <ul>
                    <h3 className="profiledescriptions"> {context.user.firstName} </h3>
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

export default Tab1;