import React, { PropsWithChildren } from 'react';
import './Modal.scss';

interface ModalType {
  OnModal: () => void;
}

const Modal = ({ OnModal, children }: PropsWithChildren<ModalType>) => {
  return (
    <div className="ModalDiv">
      <dialog className="ChildrenBox">{children}</dialog>
      <div
        className="OutSide"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (OnModal) {
            OnModal();
          }
        }}
      />
    </div>
  );
};

export default Modal;
