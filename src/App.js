import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import BeforeVisit from './components/beforeVisit/BeforeVisit';
import Contact from './components/contact/Contact';
import Images from './components/images/Images';
import Treatments from './components/treatments/Treatments';


class App extends Component {

  state = {
    page: 'home'
  }

_clickedMenuOption = (event) => {
  if (event.target.name === 'Home') {
    this.setState({page: 'home'})
  } else if (event.target.name === 'Treatments') {
    this.setState({page: 'treatments'})
  } else if (event.target.name === 'About') {
    this.setState({page: 'about'})
  } else if (event.target.name === 'Images') {
    this.setState({page: 'images'})
  } else if (event.target.name === 'BeforeVisit') {
    this.setState({page: 'beforeVisit'})
  } else if ( event.target.name === 'Contact') {
    this.setState({page: 'contact'})
  }
  console.log(this.state.page)
}

_displayPage = () => {
  if (this.state.page === 'home'){
    return (
      <Home />
    )
  } else if (this.state.page === 'treatments') {
    return (
      <Treatments />
    )
  } else if (this.state.page === 'about') {
    return (
      <About />
    )
  } else if (this.state.page === 'images') {
    return (
      <Images />
    )
  } else if (this.state.page === 'beforeVisit') {
    return (
      <BeforeVisit />
    )
  } else if (this.state.page === 'contact') {
    return (
      <Contact />
    )
  }
}


  render() {

    return (
      <div className="App">
        <Nav />
        <div className="menu-container">
          <nav className="navbar navbar-dark top-menu">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler z-depth-2" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"  id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a onClick={this._clickedMenuOption} className="nav-link link navbar-collapse" data-toggle="collapse" data-target="#navbarNavDropdown" name="Home">Hem </a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a onClick={this._clickedMenuOption} className="nav-link link navbar-collapse" data-toggle="collapse" data-target="#navbarNavDropdown" name="Treatments">Behandlingar</a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a onClick={this._clickedMenuOption} className="nav-link link navbar-collapse" data-toggle="collapse" data-target="#navbarNavDropdown" name="About">Om oss</a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a onClick={this._clickedMenuOption} className="nav-link link navbar-collapse" data-toggle="collapse" data-target="#navbarNavDropdown" name="Images">Bilder</a>
                </li>
                <hr/>
                <li className="nav-item">
                  <a onClick={this._clickedMenuOption} className="nav-link link navbar-collapse" data-toggle="collapse" data-target="#navbarNavDropdown" name="BeforeVisit">Inför besök</a>
                </li>
                <hr/>
                <li className="nav-item mb-5">
                  <a onClick={this._clickedMenuOption} className="nav-link link navbar-collapse" data-toggle="collapse" data-target="#navbarNavDropdown" name="Contact">Kontakt</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <hr/>
        <div className="main-container">
          <div className="col s6 center-align">
            { this._displayPage() }
          </div>
          <br/>
          <hr/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;