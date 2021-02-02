import React from "react";

import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePage2, updateFormProgress } from "../rootSlice";
import {Result} from "./Result"
import {Header} from "./Header"

import {Jumbotron,Container,InputGroup, Form, FormLabel, Button} from 'react-bootstrap';


export const Step2 = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    

    const vc_funded = useSelector(state => state.page2.vc_funded)
    const investment = useSelector(state => state.page2.investment)
    
    const physical = useSelector(state => state.page2.physical)
    const construction = useSelector(state => state.page2.construction)

    const project_progress = useSelector(state => state.page2.project_progress)
    
    const {register, handleSubmit} = useForm({defaultValues: {vc_funded, investment, physical, construction, project_progress}});

    const onSubmit = (data) => {
        
        dispatch(
            updatePage2({
              ...data,
            })
          );
        dispatch(updateFormProgress(50));
        history.push("./step3")
    }

    const goBack = () => {
        dispatch(updateFormProgress(0));
        history.push("./");
    };

    return (
        <Container className="p-3">
            <Jumbotron>
                <Header />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="page1">Page 2 Details:</label>
                        <br />
                        
                        

                        <InputGroup className="p-3">
                            <Form.Group>
                            <FormLabel>Funding Sources</FormLabel>
                                <Form.Check type="checkbox" label="VC Funded" 
                                name="vc_funded" id="vc_funded" 
                                ref={register}
                                />
                                <Form.Check type="checkbox" label="Investment Available" 
                                name="investment" id="investment" 
                                ref={register}
                                />
                            </Form.Group>
                        </InputGroup> 

                        <InputGroup className="p-3">
                            <Form.Group>
                            <FormLabel>Project Type</FormLabel>
                                <Form.Check type="checkbox" label="Physical Project" 
                                name="physical" id="physical" 
                                ref={register}
                                />
                                <Form.Check type="checkbox" label="Construction Project" 
                                name="construction" id="construction" 
                                ref={register}
                                />
                            </Form.Group>
                        </InputGroup> 

                        <FormLabel>Project Progress %</FormLabel>
                        <Form.Group>
                            <Form.Control name="project_progress" id="project_progress"  type="range" ref={register} />
                        </Form.Group>

                        {/* was trying to do radio type but wasn't able to get the data satisfactorily */}
                        {/* <InputGroup className="p-3">
                            <fieldset>
                            <Form.Group as={Row} 
                            <Form.Label as="legend" column sm={2} >
                                Radios
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="first radio"
                                name="one"
                                id="formHorizontalRadios1"
                                ref={register}>
                                />
                                <Form.Check
                                type="radio"
                                label="second radio"
                                name="two"
                                id="formHorizontalRadios2"
                                ref={register}>
                                />
                                <Form.Check
                                type="radio"
                                label="third radio"
                                name="three"
                                id="formHorizontalRadios3"
                                ref={register}>
                                />
                            </Col>
                            </Form.Group>
                            </fieldset>
                        </InputGroup>  */}
                        

                        <Button onClick={goBack}>Previous</Button>{' '}
                        <Button type="submit">Next</Button>
                        </div>
                </form>
            </Jumbotron>
            <Result />
        </Container>
    )
}

export default Step2;
