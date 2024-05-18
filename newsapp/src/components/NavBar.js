import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Add this import statement
import firstImage from './img/first.png';

export default class NavBar extends Component {
  static propTypes = {
    toggleMode: PropTypes.string,
    mode: PropTypes.string,
  };
  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/General"><img style={{ width: "40px", height: "40px", borderRadius: '50%' }} src={firstImage} alt="vad" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/health">health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Sciences">Sciences</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Technologys">Technologys</Link></li>
              </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onClick={this.props.toggleMode} id="flexSwitchCheckChecked" />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode Enable</label>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
