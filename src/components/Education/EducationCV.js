import React from 'react';
import './EducationCV.css';

function EducationCV() {
  return (
    <div className='ed-cv'>
      <h3 className='ed-title'>Education</h3>
      <ul>
      <li>
          <div className='ed-date'>2020</div>
          <div className='ed-studies'>Full Stack Developer Course</div>
          <div className='ed-institution'>Green Fox Academy</div>
          <div className='ed-info'>- JavaScript, TypeScript, HTML, CSS, React, Redux, MySQL, Git, Github, Material-UI...</div>
        </li>
        <li>
          <div className='ed-date'>2015-2019</div>
          <div className='ed-studies'>MA in English and German Language Teaching</div>
          <div className='ed-institution'>Eötvös Loránd University</div>
          <div className='ed-institution'>University of Vienna</div>
          <div className='ed-info'>- Erasmus+ Mobility Program</div>
        </li>
        <li>
          <div className='ed-date'>2012-2015</div>
          <div className='ed-studies'>BA in English with German Minor</div>
          <div className='ed-institution'>Eötvös Loránd University</div>
        </li>
        <li>
          <div className='ed-date'>2007-2012</div>
          <div className='ed-studies'>Certificate of Secondary Education</div>
          <div className='ed-institution'>Pásztorvölgyi Bilingual Grammar School</div>
          <div className='ed-institution'>Naaman Forest High School, Garland (Texas, US)</div>
          <div className='ed-info'>- Academic Year in America exchange program</div>
        </li>
      </ul>
    </div>
  )
}

export default EducationCV;
