import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        From easy odering to special offers, this app has every thing you need to get authentic quality pizza at your fingertips.
        with the pizza-hut appp you can 
            .Oder with ease 
            .Find the latest deals and offers near your.        
        <p>
          
        
        </p>
      </div>
    </div>
  );
}

export default About;
