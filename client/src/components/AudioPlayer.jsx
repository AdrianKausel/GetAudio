import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import Col from "react-bootstrap/esm/Col";


const AudioPlayer=(props)=>{

    const audioUrl = 'props.url';


    return(
        <div className="backround2">
            <Container>
                
                <div className="registcont">
                    <h1 className="registertitle">ARTIST - SONG</h1>
                </div>

                <div className="registbody d-flex flex-column flex-wrap align-items-center">
                    <ReactAudioPlayer
                    // Audio de ejemplo, compartido desde Google Drive
                    src={audioUrl}
                    autoPlay={false}
                    controls
                    className="mb-3 w-75"
                    />
                    <div className="audioinfo">
                        <h2 className="registuser">About the audio</h2>
                        <ul className="d-flex flex-column flex-wrap align-items-start w-100">
                            <h3 className="subtitle"> Author:</h3>
                            <li className="descriptions"> Llamada desde props</li>
                            <h3 className="subtitle"> Song title:</h3>
                            <li className="descriptions"> Llamada desde props</li>
                            <h3 className="subtitle"> Style:</h3>
                            <li className="descriptions"> Llamada desde props</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AudioPlayer;