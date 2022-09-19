import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
    email: "",
    password:"",
}
const LogInWindow2 = () =>{
    const [form, setForm] = useState(initialState)
    const navigate = useNavigate()
    
    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]:value,
        })
    }
    const login = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/userstandard/login', form)
        .then(resp => {
            if(!resp.error){

            } else {
                Swal.fire('login', 'error')
            }
        })



    }
    return(
        <div className="backroundspecial2">
            <Container>
                <div className="logincont">
                    <Form onSubmit={login} className="login2">
                    <h1 className="logintitle2"> Login Media Creators</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="box1">Email address</Form.Label>
                            <Form.Control type="text" name='email' placeholder="Enter email" value={form.email} onChange={updateForm} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={form.password} onChange={updateForm}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" className="checktxt" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">LogIn</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default LogInWindow2;