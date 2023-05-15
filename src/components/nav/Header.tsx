import React from 'react';
import { useNavigate } from 'react-router-dom';
import { back } from '../../asset/pic';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const url: string = window.location.pathname;
  if (url.includes('payAndAlarm')) {
    return (
      <div className="HeaderDiv">
        <img src={back} onClick={() => navigate('/mypage')} />
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
