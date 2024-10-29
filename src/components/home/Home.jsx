import React, { useState } from "react";
import Products from "../products/Products";
import "./Home.css"; // Make sure to import your CSS file here
import Chatbot from "../ChatBot/Chatbot";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="350px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-container">
                <h5 className={`card-title display-3 fw-bolder mb-0 slide-in-top`}>
                  NEW SEASON ARRIVALS
                </h5>
                <p className={`card-text lead fs-2 slide-in-top`}>
                  CHECK OUT ALL THE NEW PRODUCTS
                </p>
              </div>
              <img
                className={`card-text lead fs-2 slide-in-bottom`}
                src="/assets/shop1.png"
                alt="Shop Image"
                height="350px"
                width="350px"
              />
            </div>
          </div>
        </div>
      </div>
      <Products />

    </div>

  );
};

export default Home;
