import React, {Component} from 'react';
import Button from '../button/Button';


class Footer extends Component {

  state = {

  }

  render(){

    return (
      <div className="footer-container pt-5">
        <p>Välkommen till StudioFin</p>
        <p>Idskärsvägen 10, 18450 Åkersberga</p>
        <br/>
        <a className="instagram-button" href="https://www.instagram.com/explore/locations/1747715008792330/studiofin-lash-brow/" class="fa fa-instagram"></a>
        <a className="facebook-button" href="https://sv-se.facebook.com/studiofin/" class="fa fa-facebook"></a>
      </div>
    )
  }
}

export default Footer;
