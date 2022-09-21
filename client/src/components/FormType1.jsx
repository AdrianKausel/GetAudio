import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const initialState = {
    firstName: '',
    lastName: '',
    artistName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const FormType1 = ({createData}) => {
    const [form, setForm] = useState(initialState)
    const navigate = useNavigate()

    const updateForm = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]:value,
        })
    }

    const createUser1 =  e =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/usercomposer/new', form)
        .then(resp => {
            if(!resp.error){
                Swal.fire("Register", "Success!", "success")
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
                    <Form onSubmit={createUser1} className="form1">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="whitetext">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name='firstName' value={form.firstName} onChange={updateForm} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" name='lastName' value={form.lastName} onChange={updateForm} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Artist Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Artist Name" name='artistName' value={form.artistName} onChange={updateForm} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={form.email} onChange={updateForm} />
                        </Form.Group>
                        <p> Music Genres</p>
                        <Form.Select aria-label="Default select example">
                            <option>Select Music Genres</option>
                            <option value="1">Clsssic</option>
                            <option value="2">Terror</option>
                            <option value="3">SFX</option>
                            <option value="3">Action</option>
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={form.password} onChange={updateForm} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
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

export default FormType1;