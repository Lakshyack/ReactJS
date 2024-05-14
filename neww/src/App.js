import Navbar from './components/Navbar';
import './App.css';
import Textforms from './components/Textformlls';
import Alret from './components/Alret';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  let showAlert= (msg,type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = 'white';
          showAlert("Dark Mode Enable","success")
        }
        else if(mode === 'dark'){
          setMode('light')
          document.body.style.backgroundColor = 'black';
          showAlert("Light Mode Enable","success")
  
        }
  }
  return (
   <>
<Navbar mode={mode} toggleMode={toggleMode}/>
<Alret alert={alert}/>

<Textforms mode={mode}></Textforms>
   </>
  );
}

export default App;
