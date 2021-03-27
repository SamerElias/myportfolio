import React from "react";

//import project images
import drone from "../img/DroneProject.jpeg";
import laptop from "../img/laptop.jpeg";
import socialMedia from "../img/SocialMedia.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={drone} alt="" data-lightbox="gallery-vmarine" className="img-fluid" />
                  </div>                
                  <a href="https://github.com/SamerElias/Mapping-Drone" target="_blank">
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Mapping Drone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Using OpenCV, a Camera and a Drone to scan the ground surface and build a map upon it
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <img src={laptop} alt="" className="img-fluid" />
                  </div>                
                  <a href="https://github.com/SamerElias/Spring-Boot-Backend-Application" target="_blank">
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Secure Backend Application</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Spring Boot + Java implementation using JWT auth 
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/SamerElias/Social-Media-App" target="_blank">
                  <div className="work-img">
                    <img src={socialMedia} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Social Media App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Web app where a user can share posts and like/dislike and comment
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
