import React, {Component} from 'react';
import Button from '../button/Button';
import studiofinlogo from '../../images/studiofinlogo.png';



class Contact extends Component {





  render(){

    return (
      <div className="nav-container">
        <div className="container mt-5">
          <div className="col s12 center-align">
            <img className="logo" src={studiofinlogo} width="280"/>
            <p className="slogan">Proffs på skönhet och hudvård</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
