import React from 'react';
import './MypageEditMyInfo.scss';

const MypageEditMyInfo = () => {
  return (
    <div>
      <div className="topDiv">
        <img src={imgdata.img} />
        <div className="inputDiv">
          <input maxLength={20} placeholder="20자 이내" />
          <textarea maxLength={100} placeholder="100자 이내" />
        </div>
      </div>
      <hr className="hrLine" />
      <div className="buttonDiv">
        <button className="btnSave">저장하기</button>
        <button className="btnBack">취소하기</button>
      </div>
    </div>
  );
};

export default MypageEditMyInfo;

const imgdata = {
  id: 1,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrscwx3lsb0twVlYNjri57vfLQ2R_c6ABDmA&usqp=CAU',
};
