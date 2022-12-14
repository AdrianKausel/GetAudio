import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import profilePic from "../assets/profilepic.png"
import Tab3 from "./Tab3";
import Tab11 from "./Tab11";
import Tab44 from "./Tab44";

const ProfilePage2 = () => {
    const [hover, setHover] = useState(false);
    
    return(
        <div className="backroundspecial1">
            <Container>
            <div className="profilecont">
                    <h1 className="registertitle1">Profile</h1>
                </div>
                <div>
                <Tab.Container defaultActiveKey="first">
                    <Row >
                        <Col  sm={3}>
                        <Nav className="flex-column">
                            <Nav.Item className="profileLink1" >
                            <Nav.Link  style={{textDecoration: 'none', fontWeight: 'Bold', color: hover ? 'black' : "white" }} onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}} eventKey="first">Account Information</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="profileLink3">
                            <Nav.Link style={{textDecoration: 'none', fontWeight: 'Bold', color: hover ? 'black' : "white" }} onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}} eventKey="third">Music you've bought</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="profileLink4">
                            <Nav.Link style={{textDecoration: 'none', fontWeight: 'Bold', color: hover ? 'white' : "coal" }} onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}} eventKey="fourth">Edit Profile</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Tab11/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Tab3 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <Tab44 />
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                    
                </div>
            </Container>
        </div>
    )
}

export default ProfilePage2;