import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/esm/Container";
import soundPic from "../assets/sound2.gif"

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0, x:-600 }
};

const MediaDisplay = () => {

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
                                    <div className="profilecol5">
                                        <ul>
                                            <h3 className="songsSpecs"> Artist Name:</h3>
                                            <h3 className="songsSpecs"> Song Name:</h3>
                                        </ul>
                                    </div>
                                </div>
                                
                        </motion.div>
                    </div>
                </Container>
            
            </div>
    )
}


export default MediaDisplay;