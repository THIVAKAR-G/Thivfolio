import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PizzaBoyDesc : "This website is a landing page of Pizza Boy Restaurant. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    PizzaBoyGithub : "http//github.com/THIVAKAR-G/OCTANET_APRIL.git",
    PizzaBoyWebsite : "https://pizzaboy2.vercel.app/",

    Spartanz2k24Desc : "These website developed to our collage syposiyum.It is responsible to adapted in all screen. my collage was appreciated to these project",
    Spartanz2k24Github : "httpsgithub.com/THIVAKAR-G/Spartanz2k24.git",
    Spartanz2k24Website : "https://spartanz2k24.vercel.app/",

    // NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    // NewsletterGithub:"",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    // WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    // WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    // WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
