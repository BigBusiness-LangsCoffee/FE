import React from 'react';
import { feedIcon, myInfo, orderIcon } from '../../asset/pic';
import './Nav.scss';

const Nav = () => {
  const navData = [
    {
      id: 1,
      name: '피드',
    },
    {
      id: 2,
      name: '주문',
    },
    {
      id: 3,
      name: '내정보',
    },
  ];

  return (
    <div className="container">
      {navData.map((nav) => (
        <div className="navDiv">
          <div>
            {nav.name === '피드' ? (
              <img src={feedIcon} />
            ) : nav.name === '주문' ? (
              <img src={orderIcon} />
            ) : (
              <img src={myInfo} />
            )}
          </div>
          <p>{nav.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Nav;
