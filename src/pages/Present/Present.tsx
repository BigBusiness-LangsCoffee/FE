import React from 'react';
import DetailNav from '../../components/DetailNav';
import SubNav from '../../components/SubNav';
import './Present.scss';

const Present = () => {
  return (
    <>
      <DetailNav />
      <SubNav subTitle="선물하기" />
      <div className="present">
        <div>
          <h3>선물 할 친구</h3>
          <input></input>
        </div>
        <div>
          <h3>선물 고르기</h3>
          <input></input>
        </div>
        <div>
          <h3>편지 쓰기</h3>
          <input></input>
        </div>
        <div className="boundaryLine"></div>
        <div>
          <button className="viewBtn">미리보기</button>
        </div>
      </div>
    </>
  );
};

export default Present;
