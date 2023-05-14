import React from 'react';
import './TotalPrice.scss';

const TotalPrice = () => {
  return (
    <div>
      <div className="priceInfo">
        <p>총 주문 금액</p>
        <h4>2000원</h4>
      </div>
      <div className="priceInfo">
        <p>쿠폰</p>
        <h4>- 2000원</h4>
      </div>
      <div className="priceInfo">
        <h2>결제 금액</h2>
        <h2>0 원</h2>
      </div>
      <div className="payment">
        <button>결제하기</button>
      </div>
    </div>
  );
};

export default TotalPrice;
