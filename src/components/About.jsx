import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className={`text-dark fw-bold mb-4 slide-in-top1`}>About Us</h1>
              <p className="lead mb-4 slide-in-top1" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestiae earum rem doloremque, nihil delectus ullam error
                consectetur? Dicta, non exercitationem in consectetur totam
                dolorum at voluptate laudantium aliquam, officiis perspiciatis
                molestias reiciendis consequuntur ullam perferendis velit
                blanditiis distinctio assumenda a maxime reprehenderit atque. Nam
                eius rerum distinctio, a illo earum, optio molestias nostrum
                maxime quibusdam delectus, adipisci impedit? Nam corporis
                reiciendis minus quod eaque, laborum veritatis voluptatibus id
                maiores tempore accusantium recusandae perspiciatis, officia cum
                ad maxime fuga repellendus a magni consequatur. Unde adipisci hic
                provident est sint corporis, dolorem esse autem soluta molestiae
                optio quisquam eligendi obcaecati minima?
              </p>
              <Link to="/contact" className="btn btn-outline-dark px-3">
                Contact Us
              </Link>
            </div>
            <div className={`col-md-6 d-flex justify-content-center card-text lead fs-2 slide-in-top1`}>
              <img
                src="/assets/aboutus.gif"
                alt="About Us"
                height="500px"
                width="500px"
              />
            </div>
          </div>
        </div>
        <div className="container" style={{ fontFamily: `cursive` }}>
          <div className="row gy-4">
            <div className="col-md-3 mx-4">
              <div id="flip-card-inner" >
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/Myphoto.jpg"
                    className="card-img-top"
                    alt="nothing"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Pranay Mhatre</h1>
                  <p>FULL STACK JAVA DEVELOPER</p>
                  <p> Know more about me</p>
                  <Link to="https://resume.io/r/ZpNLyeKb4" className="btn btn-outline-dark">
                    GO SOMEWHERE
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-md-3 mx-4">
              <div id="flip-card-inner" >
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/Myphoto.jpg"
                    className="card-img-top"
                    alt="nothing"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Pranay Mahtre</h1>
                  <p>FULL STACK JAVA DEVELOPER</p>
                  <p> Know more about me</p>
                  <Link to="https://resume.io/r/MltmziBAb" className="btn btn-outline-dark">
                    GO SOMEWHERE
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-md-3 mx-4">
              <div id="flip-card-inner" >
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/Myphoto.jpg"
                    className="card-img-top"
                    alt="nothing"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Pranay Mhatre</h1>
                  <p>FULL STACK JAVA DEVELOPER</p>
                  <p> Know more about me</p>
                  <Link to="https://resume.io/r/ZpNLyeKb4" className="btn btn-outline-dark">
                    GO SOMEWHERE
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-md-3 mx-4">
              <div id="flip-card-inner" >
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/Myphoto.jpg"
                    className="card-img-top"
                    alt="nothing"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Pranay Mhatre</h1>
                  <p>FULL STACK JAVA DEVELOPER</p>
                  <p> Know more about me</p>
                  <Link to="https://resume.io/r/ZpNLyeKb4" className="btn btn-outline-dark">
                    GO SOMEWHERE
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-md-3 mx-4">
              <div id="flip-card-inner" >
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/Myphoto.jpg"
                    className="card-img-top"
                    alt="nothing"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Pranay Mhatre</h1>
                  <p>FULL STACK JAVA DEVELOPER</p>
                  <p> Know more about me</p>
                  <Link to="https://resume.io/r/ZpNLyeKb4" className="btn btn-outline-dark">
                    GO SOMEWHERE
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );

};

export default About;
