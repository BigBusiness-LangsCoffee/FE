import './Shop.scss';
import { useParams } from 'react-router-dom';

export default function Shop() {
  const { shopid } = useParams();

  return (
    <div className="ShopMainWrapper">
      <div className="TopNav">
        <div className="BackBtn">
          <div className="BackIcon">
            <span className="BackTxt">뒤로</span>
          </div>
        </div>
        <div className="FxWrapper">
          <div className="FxBtn">
            <div className="FxIcon">
              <span className="FxTxt">선물</span>
            </div>
          </div>
          <div className="FxBtn">
            <div className="FxIcon">
              <span className="FxTxt">파티</span>
            </div>
          </div>
          <div className="FxBtn">
            <div className="FxIcon">
              <span className="FxTxt">팔로우</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ShopImg"></div>
      <div className="ShopDetailWrapper">
        <div className="ShopDescription">
          <span className="ShopName">스타벅스 홍대삼거리점</span>
        </div>
      </div>
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
}
