import React, { createRef, ReactElement, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MypageEditMyInfo.scss';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Modal from '../../modal/Modal';
import { OnOffModal } from '../../modal/OnOffModal';

const MypageEditMyInfo = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState('#');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const imgRef = useRef<any>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const onChange = (e: any) => {
    OnOffModal(modalOpen, setModalOpen);
    e.preventDefault();
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
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
    OnOffModal(modalOpen, setModalOpen);
  };
  return (
    <div>
      <div className="topDiv">
        {modalOpen && (
          <Modal OnModal={() => OnOffModal(modalOpen, setModalOpen)}>
            <Cropper
              ref={cropperRef}
              className="cropperDiv"
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
            />
            <div>
              <button onClick={getCropData} className="cropperBtn">
                이미지 자르기
              </button>
            </div>
          </Modal>
        )}
        <div className="imgView">
          <input type="file" onChange={onChange} ref={imgRef} id="upload" />
          <label htmlFor="upload"></label>
          <img src={cropData} onClick={() => imgRef.current.click()} />
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
    </div>
  );
};

export default MypageEditMyInfo;
