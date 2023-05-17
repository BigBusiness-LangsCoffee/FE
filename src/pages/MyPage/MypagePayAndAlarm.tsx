import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menu } from '../../asset/pic';
import Header from '../../components/nav/Header';
import './MypagePayAndAlarm.scss';

const MypagePayAndAlarm = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState<boolean>(false);
  const [alarm, setAlarm] = useState<boolean>(false);
  const a = [
    {
      id: 1,
      pay: '신한카드',
      cardNumber: '1122 3344 5566 7788',
    },
    {
      id: 2,
      pay: 'KB국민카드',
      cardNumber: '1122 3344 5566 7777',
    },
    {
      id: 3,
      pay: '토스카드',
      cardNumber: '1122 3344 5566 7799',
    },
  ];

  const paymentWay = () => {
    setPayment(!payment);
    setAlarm(false);
  };

  const alramClick = () => {
    setPayment(false);
    setAlarm(!alarm);
  };
  return (
    <div>
      <Header />
      <div className="Info">
        <img />
        <div>
          <h1 className="infoFirstDiv">보노보노</h1>
          <div className="infoSecondDiv">2</div>
        </div>
      </div>
      <div className="changeMyInfo">
        <img src={menu} />
        <div onClick={() => navigate('/editMyInfo')}>프로필 수정하기</div>
      </div>
      <hr className="hrLines" />
      <>
        <div className="chooseMenu" onClick={() => paymentWay()}>
          <div className="menuCheck">
            <img src={menu} />
            <div>결제수단</div>
          </div>
          <img src={menu} />
        </div>
        {payment ? (
          <>
            <div className="menuToggle">
              {a.map((data) => {
                const numArray = data.cardNumber.split(' ');

                numArray[1] = '*'.repeat(numArray[1].length);
                numArray[2] = '*'.repeat(numArray[2].length);

                numArray.join(' ');
                return (
                  <div className="payBox">
                    <div>{data.pay}</div>
                    <span>{numArray}</span>
                  </div>
                );
              })}
            </div>
            <div className="passOrCard">
              <div>결제 비밀번호 변경</div>
              <div>카드 추가하기</div>
            </div>
          </>
        ) : (
          ''
        )}
      </>
      <>
        <div className="chooseMenu" onClick={() => alramClick()}>
          <div className="menuCheck">
            <img src={menu} />
            <div>알림설정</div>
          </div>
          <img src={menu} />
        </div>
        {alarm ? (
          <>
            <div>
              <div>
                <div>이벤트 / 혜택</div>
                <div>주문 현황</div>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </>
      <>
        <div className="chooseMenu">
          <div className="menuCheck">
            <img src={menu} />
            <div>고객센터</div>
          </div>
          <img src={menu} />
        </div>
      </>
    </div>
  );
};

export default MypagePayAndAlarm;
