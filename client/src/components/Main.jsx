import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/esm/Container";
import findpic from "../assets/search-icon.png"
import soundPic from "../assets/sound2.gif"
import MediaDisplay from "./mediaDisplay";
import MediaTitleDisplay from "./MediaTitleDisplay";
import AddComponent from "./AddComponent";
import ListComponent from "./ListComponent";
import { Link } from "react-router-dom";

const Main = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    const [selectTag1,setSelectTag1]=useState('');

    useEffect(() => {
        if (inView) {
        control.start("visible");
        } else {
        control.start("hidden");
        }
    }, [control, inView]);

    return(
            <div className="backround1">
                <Container>
                
                    <div className="searchcont">
                    <h1 className="titles1"> <span className="gettitle">get </span> What you need...</h1>
                        <input type="text" placeholder="What are you looking for?..." className="ltter"></input>
                    </div>

                    <br/>

                    {/* <AddComponent/> */}

                    <div className="div-2">
                        <h2>
                        Find by Genre: 
                        </h2>
                    
                        <label>Select:</label>
                        <select name="genre" onChange={(e)=>setSelectTag1(e.target.value)}>
                            <option >Find by genre...</option>
                            <option value="Terror">Terror</option>
                            <option value="FX">FX</option>
                            <option value="Action">Action</option>
                            <option value="Happy">Happy</option>
                            <option value="Ambient">Ambient</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Techno">Techno</option>
                        </select>

                    </div>

                    <ListComponent selectTag1={selectTag1} />

                    <br/>

                    <Link to={'/add'} ><h4 className="add-file-h2"> Add File</h4></Link>
                    

                    
                    <div>
                        <MediaTitleDisplay/>

                        <MediaDisplay/>
                        <MediaDisplay/>
                        <MediaDisplay/>
                        <MediaDisplay/>
                    </div>
                </Container>
            
            </div>
    )
}


export default Main;