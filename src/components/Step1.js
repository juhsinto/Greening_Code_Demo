import React from "react";

import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePage1, updateProgress } from "../rootSlice";
import {Result} from "./Result"
import {Header} from "./Header"

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


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
        dispatch(updateProgress(25));
        history.push("./result")
    }

    return (
        <Container className="p-3">
            <Jumbotron>
                <Header />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="page1">Page 1 Details:</label>
                        <br />
                        <label htmlFor="project_name">Project Name:</label> 
                        <input type="text" name="project_name" id="project_name" 
                            ref={
                                register({
                                        required: "Project Name Required", 
                                })
                            }
                        />
                        {errors.project_name && <p>{errors.project_name.message}</p>}

                        <br />
                        <label htmlFor="project_name">Site Address:</label> 
                        <input type="text" name="site_address" id="site_address" 
                            ref={
                                register({
                                        required: "Site Address Required", 
                                        minLength: {value: 5, message: "Site Address Too short"} 
                                })
                            }
                        />
                        {errors.site_address && <p>{errors.site_address.message}</p>}

                        <br />
                        <label htmlFor="project_name">User Details:</label> 
                        <input type="text" name="user_details" id="user_details" 
                            ref={
                                register({
                                        required: "User Details Required", 
                                        minLength: {value: 1, message: "User Details Too short"} 
                                })
                            }
                        />
                        {errors.user_details && <p>{errors.user_details.message}</p>}
                        
                        <br /><br />

                        <button type="submit"> Next</button>
                        </div>
                </form>
            </Jumbotron>
            <Result />
        </Container>
    )
}

export default Step1;
