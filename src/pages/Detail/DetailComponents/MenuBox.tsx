import React, { useState } from 'react';
import './MenuBox.scss';

const MenuBox = ({ price, menuName }: { price: number; menuName: string }) => {
  const [aMenuCount, setMenuCount] = useState<number>(1);
  const [aPrice, setAPrice] = useState<number>(price);

  const aMenuSet = (e: any) => {
    if (e.target.name === '-' && aMenuCount > 1) {
      setAPrice(aPrice - price);
      setMenuCount(aMenuCount - 1);
    } else if (e.target.name === '+') {
      setMenuCount(aMenuCount + 1);
      setAPrice(aPrice + price);
    }
  };

  return (
    <>
      <div>
        <div className="aMenuBox">
          <div className="imgBox">
            <img src="" alt="" />
          </div>
          <div className="textBox">
            <h2>{menuName}</h2>
            <button className="delBtn">삭제</button>
            <p>{aPrice}원</p>
            <div className="btnList">
              <button
                name="-"
                onClick={(e) => {
                  aMenuSet(e);
                }}
              >
                -
              </button>
              <p>{aMenuCount}</p>
              <button
                name="+"
                onClick={(e) => {
                  aMenuSet(e);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBox;
