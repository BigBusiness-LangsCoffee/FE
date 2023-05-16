import { useState } from 'react';
import DetailParty from '../Detail/DetailParty';
import Present from '../Present/Present';
import './Main.scss';

function Main() {
  const [viewParty, setViewParty] = useState<boolean>(false);
  const [viewPresent, setViewPresent] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setViewParty(true);
          setViewPresent(false);
        }}
      >
        파티보기
      </button>
      <button
        onClick={() => {
          setViewPresent(true);
          setViewParty(false);
        }}
      >
        선물하기 보기
      </button>
      {viewParty && <DetailParty />}
      {viewPresent && <Present />}
    </>
  );
}
export default Main;
