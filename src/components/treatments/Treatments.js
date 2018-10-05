import React, {Component} from 'react';
import Button from '../button/Button';




class Treatments extends Component {


  render(){

    return (



        <div className="treatments-container mt-5">
        <br/>
          <div className="col s12 center-align">
          <div className="card-group">
            <div className="card mb-3 treat-ad z-depth-3 phiBrows">
              <div className="card-body">
                <h4 className="card-title">PhiBrows</h4>
                <a href="https://www.bokadirekt.se/places/studiofin-15620" className="btn booking-button z-depth-4">Bokning</a>
                <hr className="card-break"/>
                <p className="card-text z-depth-3">
                    PhiBrows 3D-Tatuering är en semi-permanent tatuering
                    kallad pigmentering med stråteknik för ett naturtroget utseende.
                    Pigmentering är till för att tillsätta strån där det saknas i
                    samma färg som dina befintliga naturliga strån. I priset ingår
                    ett återbesök inom 60 dagar.</p>
              </div>
            </div>
            <div className="card mb-3 treat-ad z-depth-3 phiContour">
              <div className="card-body">
                <h4 className="card-title">PhiContour</h4>
                <a href="https://www.bokadirekt.se/places/studiofin-15620" className="btn booking-button z-depth-4">Bokning</a>
                <hr className="card-break"/>
                  <p className="card-text z-depth-3">
                    PhiContour 3D-Tatuering är en semi-permanent tatuering kallad
                    pigmentering som utförs med maskin. Denna typ av pigmentering
                    är till för att tillsätta en så kallad "pudereffekt".
                    Slutlooken av denna metod kan estetiskt jämföras med sminkade
                    ögonbryn. I priset ingår ett återbesök inom 60 dagar.</p>
              </div>
            </div>
          </div>
          <div className="card-group mt-5">
            <div className="card mb-3 treat-ad z-depth-3 lashExtension">
              <div className="card-body">
                  <h4 className="card-title">Fransförlängning</h4>
                  <a href="https://www.bokadirekt.se/places/studiofin-15620" className="btn booking-button z-depth-4">Bokning</a>
                  <hr className="card-break"/>
                    <p className="card-text z-depth-3">
                      På studiofin arbetar vi endast med volymfransar. Volym är
                      tunna syntetfransar som fästes som vippor på den naturliga
                      fransen. Man fokuserar inte på längden utan man går helt efter
                      de naturliga fransarnas skick. Slutresultatet är fluffigt,
                      stilrent och med längre hållbarhet.</p>
              </div>
            </div>
            <div className="card mb-3 treat-ad z-depth-3 lashLift">
              <div className="card-body">
                <h4 className="card-title">LashLift</h4>
                <a href="https://www.bokadirekt.se/places/studiofin-15620" className="btn booking-button z-depth-4">Bokning</a>
                <hr className="card-break"/>
                  <p className="card-text z-depth-3">
                    Lashlift är den senaste i trenden av skönhetsbehandlingar som
                    ger ett magiskt lyft. Med vattenbaserade produkter får du en
                    semi-permanent böjning av dina fransar som håller upp till 8
                    veckor. Efter behandlingen avslutar vi med färgning av fransarna
                    vilket ger ett fylligare resultat.</p>

              </div>
            </div>
            </div>
          </div>
          </div>





    )
  }
}

export default Treatments;
