import React from "react";

export const Header = ({message}) => {

    console.log("adsfasdfads",message)
    if (message === undefined) {
        message = "A simple Questionnaire"
    }
    

    return (
        <h1 className="header">{message}</h1>
    )
}

export default Header;
