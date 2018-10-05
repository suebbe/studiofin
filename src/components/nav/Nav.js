import React, {Component} from 'react';
import Button from '../button/Button';
import studiofinlogo from '../../images/studiofinlogo.png';



class Nav extends Component {





  render(){

    return (
      <div className="nav-container slide-up">

          <div className="col s12 center-align">
            <img className="logo" src={studiofinlogo} width="280"/>
            <h1 className="proffs">PROFFS PÅ SKÖNHET <br/>OCH HUDVÅRD</h1>
            <p className="salong">Din skönhetssalong i Östra Kanalstaden</p>

        </div>
      </div>
    )
  }
}

export default Nav;
