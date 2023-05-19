import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menu } from '../../asset/pic';
import Profiles from '../../components/common/Profiles';
import Header from '../../components/nav/Header';
import Modal from '../../modal/Modal';
import { OnOffModal } from '../../modal/OnOffModal';
import MypageCardBox from './MypageCardBox';
import './MypagePayAndAlarm.scss';

const MypagePayAndAlarm = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState<boolean>(false);
  const [alarm, setAlarm] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const a = [
    {
      id: 1,
      pay: '신한카드',
      cardNumber: '1122 3344 5566 7788',
      editAndDelete: false,
    },
    {
      id: 2,
      pay: 'KB국민카드',
      cardNumber: '1122 3344 5566 7777',
      editAndDelete: false,
    },
    {
      id: 3,
      pay: '토스카드',
      cardNumber: '1122 3344 5566 7799',
      editAndDelete: false,
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
    <div className="PayAlarm">
      {modalOpen && (
        <Modal OnModal={() => OnOffModal(modalOpen, setModalOpen)}>
          <div className="ModalOpen">모달 내용 들어갈 부분들</div>
        </Modal>
      )}
      <Header />
      <Profiles />
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
                console.log(data.editAndDelete);
                const numArray = data.cardNumber.split(' ');

                numArray[1] = '*'.repeat(numArray[1].length);
                numArray[2] = '*'.repeat(numArray[2].length);

                numArray.join(' ');
                return <MypageCardBox data={data} numArray={numArray} />;
              })}
            </div>
            <div className="passOrCard">
              <div>결제 비밀번호 변경</div>
              <div onClick={() => OnOffModal(modalOpen, setModalOpen)}>카드 추가하기</div>
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
              <div className="secondDiv">
                <div>이벤트 / 혜택</div>
                <div>
                  <input type="checkbox" id="toggle" hidden />
                  <label htmlFor="toggle" className="toggleSwitch">
                    <span className="toggleButton"></span>
                  </label>
                </div>
              </div>
              <div className="secondDiv">
                <div>주문 현황</div>
                <div>
                  <input type="checkbox" id="toggle2" hidden />
                  <label htmlFor="toggle2" className="toggleSwitch2">
                    <span className="toggleButton2"></span>
                  </label>
                </div>
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
      <div className="logOutAndVersion">
        <h1>로그아웃</h1>
        <h4>버전정보</h4>
        <h6>1.0.0.1</h6>
      </div>
    </div>
  );
};

export default MypagePayAndAlarm;
