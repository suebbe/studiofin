import React, {Component} from 'react';
import Button from '../button/Button';
import exterior from '../../images/exterior.jpg';
import interior from '../../images/interior.jpg';
import personal from '../../images/personal.jpg';

class Home extends Component {

  render(){

    return (
      <div className="container home-container">
      <br/>
        <div className="col s6 center-align slider transparent-image">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 slide-image" src={exterior} alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 slide-image" src={interior} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 slide-image" src={personal} alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
