import React from 'react';
import './WorkExperienceCV.css';

function WorkExperienceCV() {
  return (
    <div className='we-cv'>
      <h3 className='we-title'>Work Experience</h3>
      <ul>
        <li>
          <div className='we-date'>2019-2020</div>
          <div className='we-position'>English Teacher, Istanbul</div>
          <div className='we-institution'>Yıldız Technical University</div>
        </li>
        <li>
          <div className='we-date'>2018-2019</div>
          <div className='we-position'>Language Teacher, Budapest</div>
          <div className='we-institution'>Tower Language School</div>
          <div className='we-info'>- intensive courses, corporate training</div>
          <div className='we-institution'>Xántus János Bilingual High School</div>
          <div className='we-info'>- organizing extracurricular activities</div>
          <div className='we-institution'>Bonus Language School</div>
          <div className='we-info'>- adult education</div>
        </li>
      </ul>
    </div>
  )
}

export default WorkExperienceCV;
