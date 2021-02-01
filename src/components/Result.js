import React from "react";
import {useSelector} from "react-redux";

import {Link} from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Result = () => {
    const state = useSelector(state => state);
    const { progress } = state;

    return (
        <>
            <pre>{JSON.stringify(state,null, 2)}</pre>
            {/* <Link to="/">Start Over</Link> */}
            <p>Progress</p>
            <ProgressBar now={progress} label={`${progress}%`} />
        </>
    )
}