import Navbar from './components/Navbar';
import './App.css';
import Textforms from './components/Textformlls';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = 'white';
        }
        else if(mode === 'dark'){
          setMode('light')
          document.body.style.backgroundColor = 'black';
  
        }
  }
  return (
   <>
<Navbar mode={mode} toggleMode={toggleMode} />
<Textforms mode={mode}></Textforms>
   </>
  );
}

export default App;
