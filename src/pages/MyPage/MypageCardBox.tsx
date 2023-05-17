import React, { useState } from 'react';
import { deleteImg, edit } from '../../asset/pic';
import { mypageCardBox } from '../../model/mypage';
import './MypagePayAndAlarm.scss';

const MypageCardBox = ({ data, numArray }: { data: mypageCardBox; numArray: any }) => {
  const [editDelete, setEditDelete] = useState<boolean>(data.editAndDelete);

  const onClickCardOnOff = () => {
    setEditDelete(!editDelete);
  };
  console.log(editDelete);
  return (
    <>
      {editDelete ? (
        <>
          <div className="payBox2">
            <div>{data.pay}</div>
            <span>{numArray}</span>
            <div>
              <img src={edit} className="btnEdit" />
              <img src={deleteImg} className="btnDelete" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="payBox" onClick={onClickCardOnOff}>
            <div>{data.pay}</div>
            <span>{numArray}</span>
          </div>
        </>
      )}
    </>
  );
};

export default MypageCardBox;
