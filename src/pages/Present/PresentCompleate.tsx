import React from 'react';
import DetailNav from '../../components/DetailNav';
import SubNav from '../../components/SubNav';
import './PresenstCompleate.scss';

const PresentCompleate = () => {
  return (
    <>
      <DetailNav />
      <SubNav subTitle={'선물하기'} />
      <div className="presenstCompleate">
        <div className="imgBox">
          <img />
        </div>
        <div className="textBox">
          <h2>선물이 전송되었어요!</h2>
          <p>상대방이 선물을 확인하면 알려드릴게요</p>
        </div>
        <div>
          <button>확인</button>
        </div>
      </div>
    </>
  );
};

export default PresentCompleate;
