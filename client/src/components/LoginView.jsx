import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const LoginView = () => {

    return(
        <div className="backround2">
            <Container>
                <div className="registcont">
                    <h1 className="registertitle">Login</h1>
                </div>
                <div className="registbody">
                    <div className="loginuser1">
                        <h2 className="registuser">Composer Profile</h2>
                        <Button variant="warning" size="lg" className="button1"><Link to='/LogInUserType1' style={{textDecoration: 'none'}} >Go to Login</Link></Button>
                    </div>
                    <div className="loginuser2">
                    <h2 className="registuser2">Content Creator Profile</h2>
                        <Button variant="warning" size="lg"  className="button1"><Link to='/LogInUserType2' style={{textDecoration: 'none'}} >Go to Login</Link></Button>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LoginView;