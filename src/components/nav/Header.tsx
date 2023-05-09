import React from 'react';
import { back } from '../../asset/pic';
import './Header.scss';

const Header = () => {
  const url: string = window.location.pathname;
  if (url.includes('payAndAlarm')) {
    return (
      <div className="HeaderDiv">
        <img src={back} />
      </div>
    );
  } else {
    return (
      <div>
        <img />
      </div>
    );
  }
};

export default Header;
