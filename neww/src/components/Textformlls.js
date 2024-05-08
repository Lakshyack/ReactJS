import React, { useState } from "react";

export default function Textformlls(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    const upperCase = () => {
        let newText = text.toUpperCase(); // Added parentheses after toUpperCase
        setText(newText);
    };
    const lowerCase = () => {
        let newText = text.toLowerCase(); // Added parentheses after toUpperCase
        setText(newText);
    };

    return (
        <>
            <div className="container text-center">
                <h1 className="my-5"><b style={{ color: "white" }}>Text to Analyze</b></h1>
                <textarea value={text} cols="120" rows="12" onChange={handleOnChange}></textarea>
                <button className="btn btn-primary mx-1 my-1" onClick={upperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={lowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={upperCase}>Convert to UpperCase</button>
            </div>
        </>
    );
}
