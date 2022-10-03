import React from "react";
import PropTypes from 'prop-types'
import ProgressBar from 'react-bootstrap/ProgressBar';

const AudioUploadBar = ({ percentage}) => {


    return(
        <div>
            <ProgressBar animated now={percentage}/>
        </div>
    )
}


export default AudioUploadBar;