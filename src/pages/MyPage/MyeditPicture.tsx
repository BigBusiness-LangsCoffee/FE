import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Nav from '../../components/nav/Nav';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './MyeditPicture.scss';
import { feedIcon, orderIcon } from '../../asset/pic';

const MyeditPicture = ({ image, setCropData }: { image: any; setCropData: Dispatch<SetStateAction<string>> }) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  const navData = [
    {
      id: 1,
      name: '취소',
    },
    {
      id: 2,
      name: '확인',
    },
  ];

  return (
    <div className="ContainerBox">
      <Cropper
        ref={cropperRef}
        className="cropperDiv"
        zoomTo={0.5}
        initialAspectRatio={1}
        src={image}
        viewMode={1}
        minCropBoxHeight={100}
        minCropBoxWidth={100}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
      />
      <div className="container">
        {navData.map((nav) => (
          <div className="navDiv">
            <div>{nav.name === '취소' ? <img src={feedIcon} /> : <img src={orderIcon} onClick={getCropData} />}</div>
            <p>{nav.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyeditPicture;
