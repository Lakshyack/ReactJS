import React from "react";


function Navbar(props){
    return(
        <>
          <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">Shrey</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
    
    </ul>
  

  </div>
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
  <label class={`form-check-label text-${props.mode === 'light'? 'dark' : 'light'}`} for="flexSwitchCheckDefault">Dark Mode Enable</label>
</div>
</nav>
        </>
    );
}

export default Navbar;
