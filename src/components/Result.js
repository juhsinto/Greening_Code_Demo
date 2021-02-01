import React from "react";
import {useSelector} from "react-redux";

import {Link} from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Result = () => {
    const state = useSelector(state => state);
    const { formProgress } = state;

    return (
        <>
            <p>JSON data:</p>
            <pre>{JSON.stringify(state,null, 2)}</pre>
            {/* <Link to="/">Start Over</Link> */}
            <p>Form Progress:</p>
            <ProgressBar now={formProgress} label={`${formProgress}%`} />
        </>
    )
}