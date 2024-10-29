import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      if (componentMounted) {
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3" id="prod">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3" id="prod">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3" id="prod">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3" id="prod">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3" id="prod">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>

        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3" id="prod">
              <div id="flip-card-inner" >
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/lamp.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">LAMP</h5>
                    <p className="card-text">Description</p>

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>LAMP...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/B2AIahpJS.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder"> BATTERY  </h5>
                    {/* <p className="card-text">Description</p> */}

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>BATTERY...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div> <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/A3CKcjrLU.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">LAPTOP</h5>
                    {/* <p className="card-text">Description</p> */}

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>LAPTOP...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div> <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/Heater.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">   HEATER</h5>
                    {/* <p className="card-text">Description</p> */}

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>HEATER...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div> <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/switch.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">SWITCH</h5>
                    {/* <p className="card-text">Description</p> */}

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>SWITCH...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div>
            {/* <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/lamp.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">Card title</h5>
                    <p className="card-text">Description</p>

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>LAMP...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div> <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/lamp.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">Card title</h5>
                    <p className="card-text">Description</p>

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>LAMP...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div>
            <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/lamp.png"
                    className="card-img-top1"
                    alt="nothing"
                  // height="120px"
                  // width="100px"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">Card title</h5>
                    <p className="card-text">Description
                    </p>

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>LAMP...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div>
            </div> <div className="col-md-3" id="prod">
              <div id="flip-card-inner">
                <div id="flip-card-front" className="card text-center">
                  <img
                    src="/assets/lamp.png"
                    className="card-img-top1"
                    alt="nothing"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">Card title</h5>
                    <p className="card-text">Description</p>

                  </div>
                </div>
                <div className="flip-card-back">
                  <h1>LAMP...</h1>
                  <p>More Description</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, adipisci!</p>
                  <Link to={`/product`} className="btn btn-outline-dark">
                    GENERATE
                  </Link>
                </div>

              </div> 
            </div>*/}

          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">LATEST PRPDUCTS</h1>
            <hr style={{ height: `3px`, color: `black`, fontWeight: `500` }} />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
