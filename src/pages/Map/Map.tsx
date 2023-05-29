import { useState } from 'react';
import './Map.scss';
import Kakao from './Kakao';
import List from './List';

const Map: React.FC = () => {
  const [layout, setLayout] = useState(false);

  const handleLayout = () => {
    setLayout(!layout);
  };

  return (
    <div className="MapMain">
      <div className="TopNav">
        {MAP_CATEGORY.map((item) => {
          return (
            <button key={item.id} className="TopNavCategory">
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="MapDisplay">
        <div className={layout ? 'CurrentLocationInvisible' : 'CurrentLocation'}>
          <div className="CurrentLocationIcon"></div>
        </div>
        <div className="LayoutChange" onClick={handleLayout}></div>
        {layout ? <List /> : <Kakao />}
      </div>
      <div className="MainNav">
        <button className="MainNavBtn">
          <div className="MainNavIcon">
            <span className="MainNavIconText">피드</span>
          </div>
          <span className="MainNavText">피드</span>
        </button>
        <button className="MainNavBtn">
          <div className="MainNavIcon">
            <span className="MainNavIconText">주문</span>
          </div>
          <span className="MainNavText">주문</span>
        </button>
        <button className="MainNavBtn">
          <div className="MainNavIcon">
            <span className="MainNavIconTextMy">내 정보</span>
          </div>
          <span className="MainNavTextMy">내 정보</span>
        </button>
      </div>
    </div>
  );
};

export default Map;

const MAP_CATEGORY: { id: number; title: string }[] = [
  { id: 1, title: '카테고리' },
  { id: 2, title: '별점' },
  { id: 3, title: '5분거리 이내' },
  { id: 4, title: '쿠폰 있음' },
];
