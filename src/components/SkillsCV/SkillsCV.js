import React from 'react';
import './SkillsCV.css';

function SkillsCV() {
  return (
    <div className='skills-cv'>
      <h3 className='skills-title'>Skills</h3>
      <div className='skills-container'>
        <div className='skill'>
          <i className="fab fa-html5 fa-3x"></i>
          <p>HTML</p>
        </div>
        <div className='skill'>
          <i className="fab fa-css3-alt fa-3x"></i>
          <p>CSS</p>
        </div>
        <div className='skill'>
          <i className="fab fa-js-square fa-3x"></i>
          <p>JavaScript</p>
        </div>
        <div className='skill'>
          <i className="fab fa-react fa-3x"></i>
          <p>React</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsCV;
