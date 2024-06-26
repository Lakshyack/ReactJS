import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // state variable for light mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Has Been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          {/* use exat with beacuse of same input item or components */}
          <Route exact path="/about" element={<About  mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
