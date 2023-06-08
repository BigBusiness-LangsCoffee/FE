import { useState } from 'react';
import BoundaryLine from '../../components/BoundaryLine';
import DetailNav from '../../components/DetailNav';
import Payments from '../../components/Payments';
import SubNav from '../../components/SubNav';
import FreindList from './DetailComponents/FreindList';
import MenuBox from './DetailComponents/MenuBox';
import OrderDetail from './DetailComponents/OrderDetail';
import TotalPrice from './DetailComponents/TotalPrice';
import './DetailParty.scss';

const DetailParty = () => {
  const [needText, setNeedText] = useState<string>('');
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const [invite, setInvite] = useState<boolean>(false);

  const changeNeed = (e: any) => {
    setNeedText(e.target.value);
  };
  const menuName = 'mmm';
  const title = '개별메뉴';
  const title2 = '공통메뉴';

  const handleBtn = (e: any) => {
    if (e.target.innerHTML === '파티취소') {
      setIsCancel(true);
      setInvite(false);
    } else if (e.target.innerHTML === '유지하기') {
      setIsCancel(false);
    } else if (e.target.innerHTML === '초대하기') {
      setInvite(true);
    }
  };
  return (
    <div className="detailParty">
      <DetailNav />
      <SubNav subTitle={'파티모드'} />
      <div className="mainDetailList">
        <div className="partyList">
          <h2 className="title">파티모드</h2>
          <ul>
            {FIRSTFREINDLIST.map(({ id, src }: { id: number; src: string }) => {
              return (
                <li key={id}>
                  <img src={src} />
                </li>
              );
            })}
          </ul>
          <div className="discountPer">
            <p>5% 할인</p>
          </div>
          <ul>
            {SECONDFREINDLIST.map(({ id, src }: { id: number; src: string }) => {
              return (
                <li key={id}>
                  <img src={src} />
                </li>
              );
            })}
          </ul>
          <div className="discountPer">
            <p>10% 할인</p>
          </div>
        </div>
        <div className="pmBtnList">
          <button
            onClick={(e) => {
              handleBtn(e);
            }}
          >
            {isCancel ? '취소하기' : '파티취소'}
          </button>
          <button
            className={invite ? 'selectInvite' : ''}
            onClick={(e) => {
              handleBtn(e);
            }}
          >
            {isCancel ? '유지하기' : '초대하기'}
          </button>
        </div>
        {isCancel && <h2>정말로 취소하시겠습니까??</h2>}
        {invite && (
          <>
            <div className="linkBtnList">
              <button>초대 링크 복사하기</button>
              <button>QR코드</button>
            </div>
            <div className="partnerList">
              {MYFREINDS.map(({ id, name }: { id: number; name: string }) => {
                return <FreindList key={id} name={name} />;
              })}
            </div>
          </>
        )}
        <BoundaryLine />
        <h2 className="title">{title}</h2>
        <MenuBox price={1000} menuName={menuName} />
        <h2 className="title">{title2}</h2>
        <MenuBox price={2000} menuName={menuName} />
        <MenuBox price={2000} menuName={menuName} />
        <MenuBox price={2000} menuName={menuName} />
        <div className="discount">
          <div className="couponList">
            <p>쿠폰</p>
            <div className="coupon">
              <p>쿠폰 이름</p>
              <h4>1,000원 할인</h4>
              <button className="checkBtn"></button>
            </div>
          </div>
          <div className="point">
            <p>포인트</p>
            <div>
              <input className="isPoint" disabled value={'0원'}></input>
            </div>
          </div>
          <div className="checkPoint">
            <p>전부 사용하기</p>
            <button className="checkBtn"></button>
          </div>
        </div>
        <BoundaryLine />
        <OrderDetail />
        <div className="needTextBox">
          <p>요청 사항</p>
          <textarea
            value={needText}
            placeholder="맛있게 부탁드립니다."
            onChange={(e) => {
              changeNeed(e);
            }}
          />
        </div>
        <BoundaryLine />
        <Payments />
        <div className="boundaryLine"></div>
        <TotalPrice object={'결제하기'} />
      </div>
    </div>
  );
};

export default DetailParty;

const MYFREINDS = [
  { id: 1, name: '철수' },
  { id: 2, name: '영희' },
  { id: 3, name: '민수' },
  { id: 4, name: '맹구' },
  { id: 5, name: '짱구' },
  { id: 6, name: '유리' },
  { id: 7, name: '훈발롬' },
  { id: 8, name: '짱아' },
];

const FIRSTFREINDLIST = [
  { id: 1, src: '' },
  { id: 2, src: '' },
  { id: 3, src: '' },
  { id: 4, src: '' },
  { id: 5, src: '' },
];

const SECONDFREINDLIST = [
  { id: 6, src: '' },
  { id: 7, src: '' },
  { id: 8, src: '' },
  { id: 9, src: '' },
  { id: 10, src: '' },
];
