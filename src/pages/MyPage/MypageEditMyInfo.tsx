import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MypageEditMyInfo.scss';
import 'cropperjs/dist/cropper.css';
import Modal from '../../modal/Modal';
import { OnOffModal } from '../../modal/OnOffModal';
import MyeditPicture from './MyeditPicture';

const MypageEditMyInfo = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const imgRef = useRef<any>(null);

  const onChange = (e: any) => {
    setCropData('');
    setImage('');
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
    setModalOpen(false);
  };

  const onClickPicture = (e: any) => {
    imgRef.current.click();
  };
  console.log(cropData);

  return (
    <div>
      {image === '' || cropData !== '' ? (
        <>
          <div className="topDiv">
            {modalOpen && (
              <Modal OnModal={() => OnOffModal(modalOpen, setModalOpen)}>
                <div onClick={onClickPicture} className="modalBtn">
                  갤러리에서 고르기
                  <input type="file" onChange={onChange} ref={imgRef} />
                </div>
                <div className="modalBtn">사진 찍기</div>
              </Modal>
            )}
            <div className="imgView">
              <img src={cropData} onClick={() => OnOffModal(modalOpen, setModalOpen)} />
            </div>
            <div className="inputDiv">
              <input maxLength={20} placeholder="20자 이내" />
              <textarea maxLength={100} placeholder="100자 이내" />
            </div>
          </div>
          <hr className="hrLine" />
          <div className="buttonDiv">
            <button className="btnSave">저장하기</button>
            <button className="btnBack" onClick={() => navigate('/payAndAlarm')}>
              취소하기
            </button>
          </div>
        </>
      ) : (
        <MyeditPicture image={image} setCropData={setCropData} />
      )}
    </div>
  );
};

export default MypageEditMyInfo;
