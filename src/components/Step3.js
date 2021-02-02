import React from "react";

import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePage3, updateFormProgress } from "../rootSlice";
import {Result} from "./Result"
import {Header} from "./Header"

import {Jumbotron,Container, Form} from 'react-bootstrap';


export const Step3 = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const project_name = useSelector(state => state.project_name)
    const {register, handleSubmit} = useForm({defaultValues: {project_name}});

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
                <Header />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="page1">Page 3 Details:</label>
                        <br />
                        <Form.Group>
                            <Form.Label>Project Information</Form.Label>
                            <Form.Control as="textarea" name="project_information" id="project_information"  ref={register} rows={3} />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Label>Project Comments</Form.Label>
                            <Form.Control as="textarea" name="project_comments" id="project_comments"  ref={register} rows={3} />
                        </Form.Group>
                        <button onClick={goBack}>Previous</button>
                        <button type="submit">Next</button>
                    </div>
                </form>
            </Jumbotron>
            <Result />
        </Container>
    )
}

export default Step3;
