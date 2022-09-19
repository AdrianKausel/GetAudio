import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import NavBarContext from "../context/NavBarContext";

const LogInWindow = () =>{

    const context = useContext(NavBarContext)

    return(
        <div className="backroundspecial">
            <Container>
                <div className="logincont">
                    <Form className="login1">
                    <h1 className="logintitle"> Login Composers</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="box1">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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