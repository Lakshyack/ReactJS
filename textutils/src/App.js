import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';


function App() {
  return (
    <>
<Navbar title = "TextUtils" aboutText = "About TextUtils"/>
<div className="container text-center" >
<TextForm heading = "Enter the text to anylyze"/>
</div>

    </>
  );
}

export default App;
