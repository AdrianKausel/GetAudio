import React from "react";
import Container from "react-bootstrap/esm/Container";
import findpic from "../assets/search-icon.png"

const Main = () => {




    return(
            <div className="backround1">
                <Container>
                
                    <div className="searchcont">
                    <h1 className="titles1"> <span className="gettitle">get </span> What you need...</h1>
                        <input type="text" placeholder="What are you looking for?..." className="ltter"></input>
                    </div>

                </Container>
            
            </div>
    )
}


export default Main;