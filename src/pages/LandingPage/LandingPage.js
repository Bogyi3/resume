import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import './LandingPage.css';

function LandingPage() {

  return (
    <div className='background'>
      <div className='container'>
        <BusinessCard/>
        <AboutMe/>
      </div>
    </div>
  );
}

export default LandingPage;
