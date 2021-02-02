import React from "react";

import {useDispatch, useSelector} from "react-redux";
import { updatePage1, updatePage2, updatePage3, updateFormProgress } from "../rootSlice";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import {Result} from "./Result"
import {Header} from "./Header"

import {Jumbotron,Container,Button} from 'react-bootstrap';


export const Step4 = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const reset = () => {
        dispatch(
            updatePage1({})
        );
        dispatch(
            updatePage2({})
        );
        dispatch(
            updatePage3({})
        );
        dispatch(updateFormProgress(0));
        history.push("./");
    };

    return (
        <Container className="p-3">
            <Jumbotron>
                <Header message="Result Page"/>
                    
                <Result />
                <br />
                <Link to="/">Start Over</Link>
                <br />
                <Button variant="danger" onClick={reset}>Reset</Button>
            </Jumbotron>
            
        </Container>
    )
}

export default Step4;
