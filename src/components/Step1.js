import React from "react";

import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePage1, updateFormProgress } from "../rootSlice";
import {Result} from "./Result"
import {Header} from "./Header"

import {Jumbotron,Container,FormControl,InputGroup} from 'react-bootstrap';



export const Step1 = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const project_name = useSelector(state => state.project_name)
    const {register, handleSubmit, errors} = useForm({defaultValues: {project_name}});

    const onSubmit = (data) => {
        
        dispatch(
            updatePage1({
              ...data,
            })
          );
        dispatch(updateFormProgress(25));
        history.push("./step2")
    }

    

    return (
        <Container className="p-3">
            <Jumbotron>
                <Header />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="page1">Page 1 Details:</label>
                        <br />
                        
                        <InputGroup className="p-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-default">Project Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                name="project_name" id="project_name" 
                                placeholder="Enter Project Name"
                                ref={
                                    register({
                                            required: "Project Name Required", 
                                    })
                                }
                            />
                        </InputGroup>
                        {errors.project_name && <p class="project_name" style={{color: "red"}}>{errors.project_name.message}</p>}

                        <InputGroup className="p-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-default">Site Address</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                name="site_address" id="site_address" 
                                placeholder="Enter Site Address"
                                ref={
                                    register({
                                        required: "Site Address Required", 
                                        minLength: {value: 5, message: "Site Address Too short"} 
                                    })
                                }
                            />
                        </InputGroup>
                        {errors.site_address && <p class="site_address" style={{color: "red"}}>{errors.site_address.message}</p>}

                        <InputGroup className="p-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroup-sizing-default">User Details</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                name="user_details" id="user_details" 
                                placeholder="Enter User Details (like Name)"
                                ref={
                                    register({
                                        required: "User Details Required", 
                                        minLength: {value: 1, message: "User Details Too short"} 
                                    })
                                }
                            />
                        </InputGroup>
                        {errors.user_details && <p class="user_details" style={{color: "red"}}>{errors.user_details.message}</p>}
                        
                        <br /><br />

                        <button type="submit">Next</button>
                        </div>
                </form>
            </Jumbotron>
            <Result />
        </Container>
    )
}

export default Step1;
