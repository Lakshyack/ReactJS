import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("button was clicked" + text)
        let newText =  text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
      // console.log("button was clicked" + text)
      let newText =  text.toLowerCase();
      setText(newText);
  }
    const handleClearClick = ()=>{
      // console.log("button was clicked" + text)
      let newText =  "";
      setText(newText);
  }

    const handleOnChange = (event)=>{
        // console.log("button was onChange")
        setText(event.target.value)

    }
    const [text,setText] = useState('');// this is a state
    // // text = "new text" // wrong wayy to change the value of variable {text}
    // setText("Enter text here--") // this is the correct way to change the value of variable {text}
  return (
    <>
    <div className='container text-center'>
         <div className='mb-1'>
            <h1 className='my-5'><b>{props.heading}- </b></h1>
            <textarea name="" id="" value={text} onChange={handleOnChange} className='form-control' cols="10" rows="10"></textarea>
         </div>
         <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
         <button className='btn btn-success my-3 mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
         <button className='btn btn-danger my-3 mx-1' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2 b">
      <h3><b>Your Text Summary</b></h3>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
TextForm.prototype ={
heading : PropTypes.string.isRequired

}