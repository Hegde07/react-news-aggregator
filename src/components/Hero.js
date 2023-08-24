import React from "react";


const Hero = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <h1 style={{fontSize:'50px', color:'orange'}}>NewsCentral</h1> 
      <h5>The Website Build With News API</h5>
    </div>
  );
};

export default Hero;
