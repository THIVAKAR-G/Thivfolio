import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
// import {CiCoffeeCup} from "react-icons/ci";
import about from '../images/about.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There 👋!</h1>
          <h1>I'M <b>THIVAKAR</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>My <b>Introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives.<br/>
            I am currentely studying BE CSE in <b>Hindusthan Insititue of Technology</b>
             and 2026 my graduation year.<br/><br/>
            {/* I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br /> */}
            I am fluent in <b>Java</b> and am working on a few 
            projects in the <b>Frontend</b> projects.<br />
            I plan to learn <b>Next.js</b>, <b>Mongo DB</b> and<b> Express.js</b> in the near future. <br /><br />
            {/* Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>    */}
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={about} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
