import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TotalPrice.scss';

const TotalPrice = ({ object }: { object: string }) => {
  const navigate = useNavigate();
  const toPay = () => {
    if (object === '선물하기') {
      navigate('/presentCompleate');
    }
  };
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
        <button onClick={toPay}>{object}</button>
      </div>
    </div>
  );
};

export default TotalPrice;
