import React from 'react';
import './AboutMe.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Contact from './../Contact/Contact';



function AboutMe() {
  const openAboutMe = useSelector(state => state.openAboutMeReducer);
  if (openAboutMe) {
    return (
        <div className='text-container'> 
          <p>Prior to Green Fox, I was teaching English at a Technical University. While discussing the differences between programming and human languages, my students challenged me to start learning a programming language. Clear-cut syntax, rules without exceptions – it was love at first sight.</p>
          <Contact />
          <Link to='/resume/cv' style={{ textDecoration: 'none' }}><h1 className='go-to-cv'><i class="far fa-address-card"></i>&nbsp; Go to CV </h1></Link>
        </div>
    );
  } else {
    return null;
  }
}

export default AboutMe;
