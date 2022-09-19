import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:'',
}
const FormType2 = () => {
    const [form, setForm] = useState(initialState)
    const navigate = useNavigate()

    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]:value,
        })
    }

    const createUser2 =  e =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/userstandard/new', form)
        .then(resp => {
            if(!resp.error){
                Swal.fire("Register", "Success!", "success")
                alert('registrated')
                navigate('/LogIn')
                return true
            }
            else {return false}
            })
        }

    return(
        <div className="backround1">
            <Container>
                <div className="titleformcont">
                    <h1 className="regtitle">Registration</h1>
                </div>
            <div className="formcont">
                    <Form onSubmit={createUser2} className="form1">
                        <Form.Group className="mb-3" controlId="formBasicName" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name='firstName' value={form.firstName} onChange={updateForm} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" name='lastName' value={form.lastName} onChange={updateForm}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={form.email} onChange={updateForm} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={form.password} onChange={updateForm} />
                        </Form.Group>                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' value={form.confirmPassword} onChange={updateForm} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>    
    )
}
export default FormType2;