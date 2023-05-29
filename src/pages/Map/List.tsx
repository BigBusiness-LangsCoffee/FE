import './List.scss';
import { useNavigate } from 'react-router-dom';

const List: React.FC = () => {
  const navigate = useNavigate();
  const storeHandler = (id: number) => {
    navigate(`/map/${id}`);
  };

  return (
    <div className="ListWrapper">
      <input className="SearchBox"></input>
      <button className="SearchBtn">
        <div className="SearchTxt">검색</div>
      </button>
      {SHOPLISTS.map((item) => {
        return (
          <div className="ShopWrapper" onClick={(e) => storeHandler(item.id)}>
            <div className="ShopThumbnail"></div>
            <div className="ShopDescription">
              <div className="ShopInfo">
                <div className="ShopIcon"></div>
                <span className="ShopName">{item.title}</span>
              </div>
              <div className="ReviewStamps">
                <span className="Review">별점</span>
                <span className="Stamps">도장장</span>
              </div>
              <span className="TimeInfo">조리시간, 거리</span>
              <div className="FollowWrapper">
                <div className="FollowBtn">
                  <div className="FollowCircle"></div>
                  <span className="FollowTxt">팔로우</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;

const SHOPLISTS: { id: number; title: string }[] = [
  { id: 1, title: '스타벅스 홍대삼거리점' },
  { id: 2, title: '스타벅스 홍대사거리점' },
  { id: 3, title: '스타벅스 홍대오거리점' },
  { id: 4, title: '스타벅스 홍대육거리점' },
];
