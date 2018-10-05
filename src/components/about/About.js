import React, {Component} from 'react';
import Button from '../button/Button';
import studiofinlogo from '../../images/studiofinlogo.png';



class About extends Component {





  render(){

    return (

        <div className="about-container mt-5">
          <div className="col s12 center-align">
            <div className="about-text mt-3 left-align">
              <br/>
              <p className="welcome-text">Vi på StudioFin brinner för det vi gör. En förutsättning för att
              garantera att du som kund blir nöjd är att all personal självklart
              är utbildad och certifierad inom de behandlingar vi erbjuder. Vårat
              mål är att ge dig som kund den <b>absolut bästa</b> behandlingsupplevelsen.
              Detta gör vi i vår nybyggda lokal med bästa läge precis intill Åkers Kanal.
              Vi har flera års erfarenhet av branschen och håller oss alltid up-to-date
              med allt som händer inom skönhetsvård. Allt för att du skall känna dig lite
              finare när du kliver ut från oss. <br/><br/>Varmt välkommen till StudioFin!</p>
            </div>
            <br/>
            <div className="card-group">
              <div className="card personel-card z-depth-3">
                <img className="card-img-top" src="https://static.wixstatic.com/media/2e6179_bec4fefbd16d45abab560192245b16ca~mv2_d_4000_6000_s_4_2.jpg/v1/crop/x_0,y_1000,w_4000,h_4000/fill/w_214,h_212,al_c,q_80,usm_0.66_1.00_0.01/2e6179_bec4fefbd16d45abab560192245b16ca~mv2_d_4000_6000_s_4_2.webp" alt="Card image cap"/>
                <div className="card-body about-body">
                  <h5 className="card-title">Daniela</h5>
                  <hr/>
                  <p className="card-text">
                      Daniela Sandqvist, ägare till StudioFin, innehar certifikat inom fransförlängning,
                      Phibrows 3D-bryn och PhiContour. Daniela är även utbildad och certifierad
                      inom LashLift, en behandling som blir mer och mer populär.
                  </p>
                </div>
              </div>
              <hr/>
              <div className="card personel-card z-depth-3">
                <img className="card-img-top" src="https://static.wixstatic.com/media/2e6179_355ae3b289864693bd26550e797fddb9~mv2.jpg/v1/crop/x_0,y_249,w_1037,h_1058/fill/w_211,h_212,al_c,q_80,usm_0.66_1.00_0.01/2e6179_355ae3b289864693bd26550e797fddb9~mv2.webp" alt="Card image cap"/>
                <div className="card-body about-body">
                  <h5 className="card-title">Katri</h5>
                  <hr/>
                  <p className="card-text">
                      Katri Carlsson är certifierad hudterapeut sedan 3 år tillbaka och medarbetare
                      på StudioFin sedan 1 år tillbaka. Hon ger dig lyxiga ansiktsbehandlingar, vaxning
                      och massage och arbetar med det ansedda varumärket Exuviance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default About;
