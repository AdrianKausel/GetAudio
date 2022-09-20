import React from "react";
import { useContext } from "react";
import NavBarContext from "../context/NavBarContext";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pageLogo from "../assets/logogetaudio.png";
import { Link, Navigate } from "react-router-dom";



const NavBar =()=> {

    const context = useContext(NavBarContext)






    return (
        <Navbar style={{height:'130px'}} fixed="top" collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand><img src={pageLogo} height="100px"/></Navbar.Brand>
                <h1 className="maintitle"><span className="maintitle2">get</span>Audio </h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                    <Nav>
                        {!context.user.firstName && <React.Fragment>
                        <Nav.Link><Link to='/register'  style={{textDecoration: 'none', color: 'white'}}>REGISTER</Link></Nav.Link>
                        <Nav.Link><Link to='/LogIn' style={{textDecoration: 'none', color: 'white'}}>Log In</Link></Nav.Link>
                        </React.Fragment>
                        }
                        {context.user.firstName && <React.Fragment>
                        <Nav.Link><Link to='/profile'  style={{textDecoration: 'none', color: 'white', fontSize:"large" ,fontWeight: "bold"}}>{context.user.firstName}<span>{""}</span>{context.user.lastName}</Link></Nav.Link>
                        <Nav.Link><Link to='/' style={{textDecoration: 'none',fontSize:"large", color: 'white'}} >Log Out</Link></Nav.Link>
                        </React.Fragment>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;