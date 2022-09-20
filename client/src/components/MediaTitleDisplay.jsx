import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/esm/Container";
import soundPic from "../assets/sound2.gif"

const boxVariant = {
    visible: { opacity: 1, scale: 1, x:0,  transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x:500 }
};

const MediaTitleDisplay = () => {

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
                <motion.div
                                ref={ref}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control}
                                >
                                <div>
                                    <h1 className="mainSubtitle"> Take a Listen of the more recent stuff:</h1>
                                </div>
                                
                        </motion.div>  
            </div>
    )
}


export default MediaTitleDisplay;