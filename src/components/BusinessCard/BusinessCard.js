import React, { useEffect } from 'react';
import './BusinessCard.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { open, close, toggle, resize } from './../../actions';

function BusinessCard() {
  const dispatch = useDispatch();
  const width = useSelector(state => state.windowSizeReducer);

  const handleResize = () => dispatch(resize());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  useEffect(() => {
    if (width > 480) {
      dispatch(open());
    } else {
      dispatch(close())
    }
  }, [width]);
  
  return (
    <div className='card'>
      <img className='profile' src="https://i.imgur.com/Fwhtn4A.jpg" alt='profile'/>
      <h1 className='name'>Boglárka Nagy</h1>
      <h2 className='profession'>Language Teacher <br/> &#38; Aspiring Web Developer</h2>
      { width < 480 &&
        <i onClick={() => dispatch(toggle())} className='fas fa-bars bars'></i>
      }
    </div>
  )
}

export default BusinessCard;
