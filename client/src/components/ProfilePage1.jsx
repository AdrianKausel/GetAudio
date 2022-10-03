import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import profilePic from "../assets/profilepic.png"
import Tab1 from "./Tab1";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab2 from "./Tab2";

const ProfilePage1 = () => {
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
                            <Nav.Item className="profileLink2" >
                            <Nav.Link  style={{textDecoration: 'none', fontWeight: 'Bold', color: hover ? 'black' : "white" }} onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}} eventKey="second">Upload Music</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="profileLink3">
                            <Nav.Link style={{textDecoration: 'none', fontWeight: 'Bold', color: hover ? 'black' : "white" }} onMouseEnter={()=>{setHover(true);}} onMouseLeave={()=>{setHover(false);}} eventKey="third">Your Library</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Tab1/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Tab2 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Tab3 />
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

export default ProfilePage1;