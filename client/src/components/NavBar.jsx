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
                        
                        <Link className="links" to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
                        <Link className="links" to='/Profile' style={{textDecoration: 'none', color: 'white'}}>Profile Page</Link>
                        <Link className="links" to='/AudioUploader' style={{textDecoration: 'none', color: 'white'}}>Uploader Test</Link>
                    </Nav>
                    <Nav>
                        {!context.user.firstName && <React.Fragment>
                        <Link className="links" to='/register'  style={{textDecoration: 'none', color: 'white'}}>REGISTER</Link>
                        <Link className="links" to='/LogIn' style={{textDecoration: 'none', color: 'white'}}>Log In</Link>
                        </React.Fragment>
                        }
                        {context.user.firstName && <React.Fragment>
                        <Link className="links" to='/profile'  style={{textDecoration: 'none', color: 'white', fontSize:"large" ,fontWeight: "bold"}}>{context.user.firstName}<span>{""}</span>{context.user.lastName}</Link>
                        <Link className="links" to='/' style={{textDecoration: 'none',fontSize:"large", color: 'white'}} >Log Out</Link>
                        </React.Fragment>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;