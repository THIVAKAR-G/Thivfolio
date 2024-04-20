import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Thivakar</h4>
      <h4>Copyright &copy; 2024 </h4>
      <div className='footerLinks'>
        <a hre="https://github.com/THIVAKAR-G" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/thivakar-g-481135288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:thivakardixit@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer