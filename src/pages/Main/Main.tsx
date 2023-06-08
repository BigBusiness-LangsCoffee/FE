import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailParty from '../Detail/DetailParty';
import Present from '../Present/Present';
import './Main.scss';

function Main() {
  const navigate = useNavigate();
  const [viewParty, setViewParty] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setViewParty(true);
        }}
      >
        파티보기
      </button>
      <button
        onClick={() => {
          setViewParty(false);
          navigate('/present');
        }}
      >
        선물하기 보기
      </button>
      {viewParty && <DetailParty />}
    </>
  );
}
export default Main;
