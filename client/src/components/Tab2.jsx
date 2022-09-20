import React from "react";
import Button from "react-bootstrap/esm/Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';


const Tab2 = () =>{

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <div className="profilebody3">
            <div className="profilecol3">
                <h2>Upload your music!</h2>
                <div className="profilecolspecial">
                    <form onSubmit={handleSubmit(onSubmit)}> 
                            <input {...register('files')}  type="file" name='files' />
                            <button>Upload!</button>            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Tab2;