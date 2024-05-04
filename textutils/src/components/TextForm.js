import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("button was clicked" + text)
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase!", "success");
    }
    const handleLoClick = ()=>{
      // console.log("button was clicked" + text)
      let newText =  text.toLowerCase();
      setText(newText);
      props.showAlert("Coverted to Lowercase!","success");
  }
    const handleClearClick = ()=>{
      // console.log("button was clicked" + text)
      let newText =  "";
      setText(newText);
      props.showAlert("Done!","success");
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
    <div className='container text-center text-dark'>
         <div className='mb-1'>
            <h1 className='my-5' ><b style={{color : props.mode === 'dark'? '#202020' : 'white'}}>{props.heading}- </b></h1>
            <textarea name="" id="" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'? '#202020' : 'white', color : props.mode === 'dark'? 'white' : '#202020'}} className='form-control' cols="10" rows="10"></textarea>
         </div>
         <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
         <button className='btn btn-success my-3 mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
         <button className='btn btn-danger my-3 mx-1' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2 b">
      <h3><b style={{color : props.mode === 'dark'? 'white' : '#202020'}}>Your Text Summary</b></h3>
      <p style={{color : props.mode === 'dark'? 'white' : '#202020'}}>{text.split(" ").length} words and {text.length} Characters</p>
      <p style={{color : props.mode === 'dark'? 'white' : '#202020'}}>{0.008 * text.split(" ").length}Minutes read</p>
      <h3 style={{color : props.mode === 'dark'? 'white' : '#202020'}}>Preview</h3>
      <p style={{color : props.mode === 'dark'? 'white' : '#202020'}}>{text.length>0 ?text :"Enter something in the text box above to preview it here!!" }</p>
    </div>
    </>
  )
}
TextForm.prototype ={
heading : PropTypes.string.isRequired

}