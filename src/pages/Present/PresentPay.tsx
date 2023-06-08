import React from 'react';
import BoundaryLine from '../../components/BoundaryLine';
import DetailNav from '../../components/DetailNav';
import Payments from '../../components/Payments';
import SubNav from '../../components/SubNav';

import TotalPrice from '../Detail/DetailComponents/TotalPrice';
import './PresentPay.scss';

const PresentPay = () => {
  return (
    <div className="defaltBox">
      <DetailNav />
      <SubNav subTitle="선물하기" />
      <div className="presentPay">
        <div className="presentBox">
          <div>
            <p>from. 이름</p>
            <h3>
              사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 군사법원의 조직·권한 및
              재판관의 자격은 법률로 정한다. 모든 국민은 신체의 자유를 가진다.
            </h3>
          </div>
        </div>
        <div className="presentBox">
          <div>
            <p>픽업타임로고</p>
            <h3>메뉴이름</h3>
            <h3>가게이름</h3>
          </div>
          <div>
            <img src="/images/aho.jpeg" />
          </div>
        </div>
        <BoundaryLine />
        <Payments />
        <BoundaryLine />
        <div>
          <TotalPrice object={'선물하기'} />
        </div>
      </div>
    </div>
  );
};

export default PresentPay;
