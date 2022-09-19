import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";


const RegisterWindow=()=>{


    return(
        <div className="backround2">
            <Container>
                <div className="registcont">
                    <h1 className="registertitle">Register</h1>
                </div>
                <div className="registbody">
                    <div className="createuser1">
                        <h2 className="registuser">Music or Engineer Profile</h2>
                        <ul>
                            <h3 className="subtitle"> Select this option if you:</h3>
                            <li className="descriptions"> Are a musician, composer, sound engineer  or similar</li>
                            <li className="descriptions"> Want to SELL music or SFX liscences to other artists or content creators </li>
                            <li className="descriptions"> Want to create an easy and intuitive library with all your work, ready to show</li>
                            <h3 className="undertitle" > Create this account for free, only pay 5% of your sells, upload unlimited music!</h3>
                        </ul>
                        <Button variant="warning" size="lg" className="button1"><Link to='/registerUserType1' style={{textDecoration: 'none'}} >Click to Register</Link></Button>
                    </div>
                    <div className="createuser2">
                    <h2 className="registuser2">Content Creator Profile</h2>
                        <ul>
                            <h3 className="subtitle2"> Select this option if you:</h3>
                            <li className="descriptions2"> Are a video maker, film maker, youtuber, or part of the video game industry</li>
                            <li className="descriptions2"> Want to BUY music or SFX liscences from musicians and engineers around the globe </li>
                            <li className="descriptions2"> Want to acces an easy and intuitive library full of fresh ideas for your projects</li>
                            <h3 className="undertitle2" > Create this account for free, only pay what you<span className="spanget"> get</span></h3>
                        </ul>
                        <Button variant="warning" size="lg"  className="button1"><Link to='/registerUserType2' style={{textDecoration: 'none'}} >Click to Register</Link></Button>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RegisterWindow;