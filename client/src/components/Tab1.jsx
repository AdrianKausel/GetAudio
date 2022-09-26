import React from "react";
import { useContext } from "react";
import profilePic from "../assets/profile4.png"
import NavBarContext from "../context/NavBarContext";



const Tab1 = () =>{

    const context= useContext(NavBarContext)

    return(
        <div className="profilebody2">
            <div className="profilecol1">
                <ul>
                    <h3 className="profiledescriptions"> User:  <span className="profiledescriptions2">{context.user.firstName}{context.user.lastName}</span> </h3>
                    <h3 className="profiledescriptions"> Email: <span className="profiledescriptions2">{context.user.email} </span></h3>
                    <h3 className="profiledescriptions"> Artist Name: <span className="profiledescriptions2"> {context.user.artistName}</span></h3>
                </ul>
            </div>
            <div className="profilecol2">
                <img className="profilepics" src={profilePic}/>
            </div>
        </div>
    )
}

export default Tab1;