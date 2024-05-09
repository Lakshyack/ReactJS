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
    const ClearText = ()=>{
        let newText = ""; // Added parentheses after toUpperCase
        setText(newText);
    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text);
    }
    const removeExtraSpace = ()=>
    {
        let newText = text.replace(/\s+/g, " ");
        setText(newText)
    }

    return (
        <>
            <div className="container text-center">
                <h1 className="my-5"><b style={{color : props.mode === 'light' ? '#212529' : 'white'}}>Text to Analyze</b></h1>
                <textarea value={text} cols="120" rows="12" style={{backgroundColor : props.mode === 'light' ? 'white' : '#212529',color : props.mode === 'light' ? '#212529' : 'white'}} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary mx-1 my-2" onClick={upperCase}>Convert to UpperCase</button>
                <button className="btn btn-success mx-1 my-2" onClick={lowerCase}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-1 my-2" onClick={ClearText}>Clear Text</button>
                <button className="btn btn-secondary mx-1 my-2" onClick={copyText}>Copy Text</button>
                <button className="btn btn-warning mx-1 my-2" onClick={removeExtraSpace}>Remove Extra Space</button>
            </div>

            <div className="container">
              <h4>Your Text Summary</h4>
              <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Word</p>

                <p>{text.split("").length} Character</p>
                <p>How much time will it take to read</p>
                <p>{0.008 * text.split("").length} Seconds</p>

            </div>
        </>
    );
}
