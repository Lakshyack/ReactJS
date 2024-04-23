import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("button was clicked" + text)
        let newText =  text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("button was onChange")
        setText(event.target.value)

    }
    const [text,setText] = useState('Enter text here');// this is a state
    // // text = "new text" // wrong wayy to change the value of variable {text}
    // setText("Enter text here--") // this is the correct way to change the value of variable {text}
  return (
    <div>
         <div className='mb-1'>
            <h1 className='my-5'>{props.heading}- </h1>
            <textarea name="" id="" value={text} onChange={handleOnChange} className='form-control' cols="10" rows="10"></textarea>
         </div>
         <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
TextForm.prototype ={
heading : PropTypes.string.isRequired

}