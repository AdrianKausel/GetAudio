import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/esm/Container";
import findpic from "../assets/search-icon.png"
import soundPic from "../assets/sound2.gif"
import MediaDisplay from "./mediaDisplay";
import MediaTitleDisplay from "./MediaTitleDisplay";

const Main = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

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