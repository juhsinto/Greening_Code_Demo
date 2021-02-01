import React from "react";

import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { updatePage3, updateFormProgress } from "../rootSlice";

import {Result} from "./Result"
import {Header} from "./Header"

import {Jumbotron,Container,InputGroup, Form, FormLabel} from 'react-bootstrap';


export const Step4 = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const project_name = useSelector(state => state.project_name)
    const {register, handleSubmit, errors} = useForm({defaultValues: {project_name}});

    const onSubmit = (data) => {
        
        dispatch(
            updatePage3({
              ...data,
            })
          );
        dispatch(updateFormProgress(100));
        history.push("./step4")
    }

    const goBack = () => {
        dispatch(updateFormProgress(0));
        history.push("./step2");
    };

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
