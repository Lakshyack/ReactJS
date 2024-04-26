import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';


function App() {
  return (
    <>
<Navbar title = "TextUtils" aboutText = "About TextUtils"/>
<div className="container" >
<TextForm heading = "Enter The Text To Analyze "/>
<About/>
</div>
    </>
  );
}

export default App;
