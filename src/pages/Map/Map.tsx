import './Map.scss';

const Map: React.FC = () => {
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
      <div className="MapDisplay"></div>
      <div className="MainNav">
        <button className="MainNavBtn">
          <div className="MainNavIcon">피드</div>
          <span className="MainNavText">피드</span>
        </button>
        <button className="MainNavBtn">
          <div className="MainNavIcon">주문</div>
          <span className="MainNavText">주문</span>
        </button>
        <button className="MainNavBtn">
          <div className="MainNavIcon">내 정보</div>
          <span className="MainNavText">내 정보</span>
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
