import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div>Designed & Developed by Puneeth Prabhu</div>
        <div className='copyright'>
          &copy; 2023 All Rights Reserved
        </div>
        <div>API Credit: <a href="https://newsapi.org">News API</a></div>
      </div>
    </div>
  )
}

export default Footer