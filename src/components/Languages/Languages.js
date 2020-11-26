import React from 'react';
import './Languages.css';

function Languages() {
  return (
    <div className='lang-cv'>
      <h3 className='lang-title'>Language Skills</h3>
      <div className='lang-bars'>
        <p className='language'>Hungarian</p>
        <div class='max-level'>
          <div className='my-level' style={{ width: '100%' }}>100%</div>
        </div>

        <p className='language'>English</p>
        <div class='max-level'>
          <div className='my-level' style={{ width: '95%' }}>95%</div>
        </div>

        <p className='language'>German</p>
        <div class='max-level'>
          <div className='my-level' style={{ width: '77%' }}>77%</div>
        </div>

        <p className='language'>Turkish</p>
        <div class='max-level'>
          <div className='my-level' style={{ width: '21%' }}>21%</div>
        </div>
      </div>
    </div>
  )
}

export default Languages;
