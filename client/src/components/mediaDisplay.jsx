import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/esm/Container";
import soundPic from "../assets/sound2.gif"
import ReactAudioPlayer from 'react-audio-player';
import axios from "axios";


const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0, x:-600 }
};

const MediaDisplay = (props) => {

    const control = useAnimation();
    const [ref, inView] = useInView();
    const [audioSrc, setAudioSrc] = useState([]);


    
    useEffect(() => {
        if (inView) {
        control.start("visible");
        } else {
        control.start("hidden");
        }
    
        }, [control, inView]);

    return(
            <div>
                <Container>
                    <div>
                        <motion.div
                                ref={ref}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control}
                                >
                                <div className="mediacont2">
                                    <div className="profilecol4">
                                        <img className="soundpics" src={soundPic}/>
                                    </div>
                                    <div  className="profilecol5 d-flex flex-wrap flex-row justify-content-start">
                                        <h3 className="songsSpecs w-100"> Artist Name: {"Adrian Kausel"}</h3>
                                        <h3 className="songsSpecs w-100"> Song Name: {props.audioUrl}</h3>
                                        <ReactAudioPlayer
                                            className="d-flex justify-self-center w-100"
                                            src={props.audioUrl}
                                            autoPlay={false}
                                            controls 

                                            
                                        />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                
                        </motion.div>
                    </div>
                </Container>
            
            </div>
    )
}


export default MediaDisplay;