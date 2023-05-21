import React, { useRef, useState } from 'react';
import Nav from '../../components/nav/Nav';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { OnOffModal } from '../../modal/OnOffModal';

const MyeditPicture = () => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      // setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
    OnOffModal(modalOpen, setModalOpen);
  };

  return (
    <div>
      <Cropper
        ref={cropperRef}
        className="cropperDiv"
        zoomTo={0.5}
        initialAspectRatio={1}
        preview=".img-preview"
        // src={image}
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
      <Nav />
    </div>
  );
};

export default MyeditPicture;
