import React, { useState } from 'react';
import './FreindList.scss';

const FreindList = ({ name }: { name: string }) => {
  const [isInvite, setIsInvite] = useState<boolean>(false);
  return (
    <div className="partners">
      <p>{name}</p>
      <button
        className={isInvite ? 'complete' : ''}
        onClick={() => {
          setIsInvite(true);
        }}
      >
        {isInvite ? '초대 완료' : '초대하기'}
      </button>
    </div>
  );
};

export default FreindList;
