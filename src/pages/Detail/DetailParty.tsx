import React, { useState } from 'react';

import './DetailParty.scss';

const DetailParty = () => {
  const [aMenuCount, setMenuCount] = useState<number>(1);
  const [aPrice, setAPrice] = useState<number>(1000);

  console.log(aMenuCount);
  const aMenuSet = (e: any) => {
    if (e.target.name === '-' && aMenuCount > 1) {
      return setMenuCount(aMenuCount - 1);
    } else if (e.target.name === '+') {
      return setMenuCount(aMenuCount + 1);
    }
  };

  return (
    <div className="detailParty">
      <div className="buttonList">
        <div>
          <button>뒤로</button>
        </div>
        <div className="subBtn">
          <button>선물</button>
          <button>파티</button>
          <button>팔로우</button>
        </div>
      </div>
      <div className="subNav">
        <div className="subNavList">
          <p>파티모드</p>
          <button>잡기</button>
          <p>n개</p>
        </div>
      </div>
      <div className="mainDetailList">
        <div>
          <h2 className="left">파티모드</h2>
          <ul>
            <li>사진</li>
            <li>빈칸</li>
            <li>5프로 할인</li>
            <li>빈칸</li>
            <li>5프로 할인</li>
            <li>빈칸</li>
            <li>빈칸</li>
            <li>20프로 할인</li>
            <li>빈칸</li>
            <li>25프로 할인</li>
          </ul>
        </div>
        <div className="pmBtnList">
          <button>취소하기</button>
          <button>유지하기</button>
        </div>
        <h2>개별메뉴</h2>
        <div>
          <div className="aMenuBox">
            <div className="imgBox">
              <img src="#" alt="#" />
            </div>
            <div className="textBox">
              <p>무슨무슨 메뉴</p>
              <p>{aPrice}</p>
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
        <div>
          <h2>공통메뉴</h2>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DetailParty;
