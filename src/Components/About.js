import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Thivakar</b> and I am from Tamil Nadu, India.
            I'm a <b>web developer</b> and a Pre-final year college student pursuing <b>BE in CSE</b>. <br/><br/>
            I have done an internship as a <b>web developer </b> at Octanet which is a fintech startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'> Skills</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Express' />
        <Skills skill='MongoDB' />
        <Skills skill='Express'/>
      </div>
    </>
  )
}

export default About
