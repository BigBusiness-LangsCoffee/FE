import React from 'react';
import './SubNav.scss';

const SubNav = ({ subTitle }: { subTitle: string }) => {
  return (
    <div className="subNav">
      <div className="subNavList">
        <p>{subTitle}</p>
        <button>잡기</button>
        <p>n개</p>
      </div>
    </div>
  );
};

export default SubNav;
