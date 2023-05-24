import React, { useState } from 'react';
import './OrderDetail.scss';

const OrderDetail = () => {
  const [isPick, setIsPick] = useState<boolean>(true);
  const [when, setWhen] = useState<boolean>(true);
  return (
    <>
      <div className="toggleList">
        <p>주문 방법</p>
        <div className="toggleBtnList">
          <button
            className={isPick ? 'selectBtn' : 'noneSelectBtn'}
            onClick={() => {
              setIsPick(true);
            }}
          >
            픽업
          </button>
          <button
            className={isPick ? 'noneSelectBtn' : 'selectBtn'}
            onClick={() => {
              setIsPick(false);
            }}
          >
            배달
          </button>
        </div>
      </div>
      {isPick && (
        <div className="toggleList">
          <p>픽업 시각</p>
          <div className="toggleBtnList">
            <button
              className={when ? 'selectBtn' : 'noneSelectBtn'}
              onClick={() => {
                setWhen(true);
              }}
            >
              즉시
            </button>
            <button
              className={when ? 'noneSelectBtn' : 'selectBtn'}
              onClick={() => {
                setWhen(false);
              }}
            >
              시간에 맞춰서
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
