import React from 'react';
import './DetailNav.scss';

const DetailNav = () => {
  return (
    <div className="detailNav">
      <div>
        <button>뒤로</button>
      </div>
      <div className="subBtn">
        <button>선물</button>
        <button>파티</button>
        <button>팔로우</button>
      </div>
    </div>
  );
};

export default DetailNav;
