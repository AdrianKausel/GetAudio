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
import axios from "axios";

const Main = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();
    const [audioSrc, setAudioSrc] = useState([]);


    const [selectTag1,setSelectTag1]=useState('');


    const getUrl = ()=>{
        axios.get('/api/audioUpload/63361ff569d936e093f5891e')
            .then(resp =>{
                setAudioSrc(resp.data.name)
            })
    }


    useEffect(() => {
        if (inView) {
        control.start("visible");
        } else {
        control.start("hidden");
        }
        const getUrl = ()=>{
            axios.get('/api/audioUpload/63361ff569d936e093f5891e')
                .then(resp =>{
                    setAudioSrc(resp.data)
                })
        }

    }, [control, inView]);

    return(
            <div className="backround1">
                <Container>
                
                    <div className="searchcont">
                    <h1 className="titles1"> <span className="gettitle">get </span> What you need...</h1>
                        <input type="text" placeholder="What are you looking for?..." className="ltter"></input>
                        <MediaDisplay audioUrl='Kalimba.mp3'/>
                        <MediaDisplay audioUrl='sipsip.mp3'/>
                        <MediaDisplay audioUrl='ChorusDancer .mp3'/>
                        <MediaDisplay audioUrl='Locura.mp3'/>
                        <MediaDisplay audioUrl='mystic.mp3'/>
                        <MediaDisplay audioUrl='dance.mp3'/>
                        <MediaDisplay audioUrl='slow.mp3'/>
                        <MediaDisplay audioUrl={audioSrc}/>
                    </div>
                </Container>
            
            </div>
    )
}


export default Main;