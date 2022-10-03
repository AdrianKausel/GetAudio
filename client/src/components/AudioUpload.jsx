import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form'
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import AudioUploadBar from "./AudioUploadBar";
import ReactAudioPlayer from "react-audio-player";


const AudioUploader = () => {
    const [file, setFile]= useState();
    const [filename, setFilename]= useState()
    const [uploadedFile, setUploadedFile] = useState({})
    const [uploadPercentage, setUploadPercentage] = useState(0)

    const onChange = e => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }
    const onChangeName = e =>{
        setFilename(e.target.value)
    }
    const submitMusic = async e => {
        e.preventDefault();
        console.log(filename)
        const formData = new FormData(e.target);
    



        try{
            
            const res = await axios.post('http://localhost:8000/api/audioUpload/new', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }, 
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100)/
                    progressEvent.total)));
                    setTimeout(()=> setUploadPercentage(0),10000);
                },
            });
            e.preventDefault();
            const { fileName, filePath } = res.data;
            console.log(filePath);

            setUploadedFile({ fileName, filePath })
            
        } catch(err) {
            e.preventDefault();
            if(err.response.status === 500){
                console.log('There was a problem with the server')
            }else {
                console.log(err.response.data.msg)
            }

        }
    }

    return(
        <div className="backround1upload">
            <Container>
                <Form onSubmit={submitMusic}>
                    <div className="uploaderbackround">
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Upload your Music!</Form.Label>
                            <Form.Control type="file" name="file" size="lg" onChange={onChange} />
                            <Form.Label>{filename}</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Song Name</Form.Label>
                            <Form.Control type="text" name={"filename"} placeholder={filename} value={filename} onChange={onChangeName} />
                        </Form.Group>
                        </Form.Group>
                        <AudioUploadBar percentage={uploadPercentage}/>
                    </div>
                    <Button type="submit"> Upload! </Button>
                </Form>
                { uploadedFile ? <div className="registbody d-flex flex-column flex-wrap align-items-center">
                    <ReactAudioPlayer
                    src={uploadedFile.fileName}
                    autoPlay={false}
                    controls
                    className="mb-3 w-75"
                    /></div> : null}
            </Container>
        </div>
    )
}

export default AudioUploader