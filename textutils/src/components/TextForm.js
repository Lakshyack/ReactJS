import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success');
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!', 'success');
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Done!', 'success');
  };
  const handleClearSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim(); // Removes extra spaces
    setText(newText);
    props.showAlert('Extra spaces removed!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState('');

  return (
    <>
      <div className='container text-center text-dark'>
        <div className='mb-1'>
          <h1 className='my-5'>
            <b style={{ color: props.mode === 'dark' ? '#202020' : 'white' }}>
              {props.heading}-{' '}
            </b>
          </h1>
          <textarea
            name=''
            id=''
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#202020' : 'white',
              color: props.mode === 'dark' ? 'white' : '#202020',
            }}
            className='form-control'
            cols='10'
            rows='10'></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary my-3 mx-1 my-1'
          onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-success my-3 mx-1 my-1'
          onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-danger my-3 mx-1 my-1'
          onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-warning my-3 mx-1 my-1'
          onClick={handleClearSpacesClick}>
          Clear Extra Spaces
        </button>
      </div>
      <div className='container my-2 b'>
        <h3>
          <b style={{ color: props.mode === 'dark' ? 'white' : '#202020' }}>
            Your Text Summary
          </b>
        </h3>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#202020' }}>
          {text
            .split(/\s+/)
            .filter((element) => element.length !== 0).length}{' '}
          words and{' '}
          {text.split('').filter((char) => char !== ' ').length} Characters
        </p>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#202020' }}>
          {0.008 *
            text
              .split(/\s+/)
              .filter((element) => element.length !== 0).length}{' '}
          Minutes read
        </p>
        <h3 style={{ color: props.mode === 'dark' ? 'white' : '#202020' }}>
          Preview
        </h3>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#202020' }}>
          {text.length > 0
            ? text
            : 'Enter something in the text box above to preview it here!!'}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
