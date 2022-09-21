import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialState = {
    songName: '',
    media:"",
}


const Tab2 = () =>{
    const[file, setFile] = useState(initialState)
    const [form, setForm] = useState(initialState)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data.files.Filelist[0]?.files)
        setFile(data.FileList[0])
        axios.post('http://localhost:8000/api/mediafiles/new', file)
        .then(resp => {
            if(!resp.error){
                Swal.fire("Register", "Success!", "success")
                alert('registrated')
                return true
            }
            else {return false}
            })

    }

    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]:value,
        })
    }

    return(
        <div className="profilebody3">
            <div className="profilecol3">
                <h2>Upload your music!</h2>
                <div className="profilecolspecial">
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <input {...register('files')}  type="file" name='files' />
                        <button variant="warning">Upload!</button>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="whitetext">Song Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Song Name" name='songName' value={form.songName} onChange={updateForm} />
                        </Form.Group>            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Tab2;