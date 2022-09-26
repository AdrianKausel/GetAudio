import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import NavBarContext from "../context/NavBarContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
    email: "",
    password:"",
}

const LogInWindow = () =>{

    const [form, setForm] = useState(initialState)
    const navigate = useNavigate()
    const context = useContext(NavBarContext)

    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]:value,
        })
    }
    const login = e =>{
        e.preventDefault();
        axios.post('/api/usercomposer/login', form)
        .then(resp => {
            console.log(resp.data.user)
            if(!resp.data.error){
                context.setUser(resp.data.user);
                Swal.fire("Login", `Welcome ${resp.data.user.firstName} ${''} ${resp.data.user.lastName}!`, "success")
                navigate('/Profile');
            } else {
                Swal.fire('Login', 'Incorrect user or password', 'error')
            }
        })
    }

    return(
        <div className="backroundspecial">
            <Container>
                <div className="logincont">
                    <Form onSubmit={login} className="login1">
                    <h1 className="logintitle"> Login Composers</h1>
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
                        <Button variant="primary" type="submit">Log In</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default LogInWindow;