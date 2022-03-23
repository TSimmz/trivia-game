import React from 'react';
import './Loading.scss';
import loading from 'assets/loading.svg';

const Loading = ({ loadingText }) => {
  return (
    <div className='loading-container'>
      <img src={loading} className='loading-icon' alt='loading' />
      <p className='loading-text'>{loadingText}</p>
    </div>
  );
};

export default Loading;
