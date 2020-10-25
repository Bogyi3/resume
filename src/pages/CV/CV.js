import React from 'react';
import './CV.css';
import HeaderCV from './../../components/HeaderCV/HeaderCV';
import SkillsCV from './../../components/SkillsCV/SkillsCV';
import WorkExperienceCV from '../../components/WorkExperienceCV/WorkExperienceCV';
import EducationCV from '../../components/Education/EducationCV';
import Languages from '../../components/Languages/Languages';
import ContactInfoCV from '../../components/ContactInfoCV/ContactInfoCV';
import { Link } from 'react-router-dom';

function CV() {
  return (
    <div className='background-cv'>
      <div className='cv-form'>
        <HeaderCV />
        <SkillsCV />
        <WorkExperienceCV />
        <EducationCV />
        <Languages />
        <ContactInfoCV />
        <Link to='/resume' style={{ textDecoration: 'none' }}><h1 className='go-to-main'><i class="far fa-address-card"></i>&nbsp; Go to Main Page</h1></Link>
      </div>
    </div>
  )
}

export default CV;
