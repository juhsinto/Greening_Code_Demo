import React from "react";

import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePage1 } from "../rootSlice";
import {Result} from "./Result"
import {Header} from "./Header"

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export const Step1 = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const project_name = useSelector(state => state.project_name)
    const {register, handleSubmit} = useForm({defaultValues: {project_name}});

    const onSubmit = (data) => {
        
        dispatch(
            updatePage1({
              ...data,
            })
          );
        history.push("./result")
    }

    return (
        <Container className="p-3">
            <Jumbotron>
                <Header />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="project_name">Enter Project Name:</label>
                        <input type="text" name="project_name" id="project_name" ref={register} />
                        
                        <button>Next</button>
                        </div>
                </form>
            </Jumbotron>
            <Result />
        </Container>
    )
}

export default Step1;
