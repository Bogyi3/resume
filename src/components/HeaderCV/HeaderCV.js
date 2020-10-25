import React from 'react';
import './HeaderCV.css';

function HeaderCV() {
  return (
    <header class='header-cv'>
      <img className='profile-cv' src="https://i.imgur.com/jJ8xeMu.jpg?1" alt="profile"/>
      <h1 className='name-cv'>Boglárka Nagy</h1>
      <h2 className='profession-cv'>Junior Full Stack Developer</h2>
      <p className='motivation-cv'>My main motivation is to make a difference. When I’m helping others, my job immediately becomes my passion. I’d love to take on challenging tasks that require creativity, responsibility, and allow me to grow.</p>
    </header>
  )
}

export default HeaderCV;
