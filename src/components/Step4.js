import React from "react";


import { Link } from "react-router-dom";
import {Result} from "./Result"
import {Header} from "./Header"

import {Jumbotron,Container} from 'react-bootstrap';


export const Step4 = () => {

    return (
        <Container className="p-3">
            <Jumbotron>
                <Header message="Result Page"/>
                    
                <Result />
                <br />
                <Link to="/">Start Over</Link>
            </Jumbotron>
            
        </Container>
    )
}

export default Step4;
