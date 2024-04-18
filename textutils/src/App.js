
import './App.css';
let name = "harry";

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>ABout</li>
      <li>Contact</li>
      <div className="container">
        <h1>Hello {name}</h1>
        {/* <img src={Logo} alt="" /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum soluta officia dolorum non consectetur alias hic quae commodi quos, fugit odio, enim molestias provident minima, earum exercitationem repellendus? Recusandae, temporibus!
        </p>
      </div>
    </nav>
    </>
  );
}

export default App;
