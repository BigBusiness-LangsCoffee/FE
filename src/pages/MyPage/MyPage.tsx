import { useNavigate } from 'react-router-dom';
import { menu } from '../../asset/pic';
import Profiles from '../../components/common/Profiles';
import './MyPage.scss';

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="MContain">
      <Profiles />
      <div className="MypageTopTitle">
        <div>
          <div>가장 많이 선물해준 사람</div>
          <div className="GiftPeople">
            {a.map((v) => (
              <div className="GiftTake">
                <img src={v.img} />
                <p>{v.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>가장 많이 선물한 사람</div>
          <div className="GiftPeople">
            {a.map((v) => (
              <div className="GiftTake">
                <img src={v.img} />
                <p>{v.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ClickStyle">
        <div className="StarOrSet">
          <img src={menu} />
          <div>즐겨찾기</div>
        </div>
        <div className="StarOrSet" onClick={() => navigate('/payAndAlarm')}>
          <img src={menu} />
          <div>설정</div>
        </div>
      </div>
      <hr className="HrWidth" />
      <h1 className="lastOrder">이전주문</h1>
      <div className="BoxScroll">
        {b.map((v) => (
          <div className="OrderBox">
            <img />
            <div className="OrderDiv">
              <div className="OrderState">
                <div>일시</div>
                <div>포장 여부</div>
                <div>최종 상태</div>
              </div>
              <h2>메뉴 이름</h2>
              <div>가게 이름</div>
              <p>가격</p>
              <div className="OrderClick">
                <div>재주문</div>
                <div>리뷰 쓰기</div>
              </div>
            </div>
          </div>
        ))}
        <div className="HideBox"></div>
      </div>
    </div>
  );
};

const Container = styled.div`
  width: 450px;
  height: 800px;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  border: 1px solid black;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  padding-bottom: 0;
`;
const ProfilePic = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: 100%;
`;
const ProfileName = styled.p`
  margin-left: 30px;
`;
export default MyPage;

const a = [
  {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNPDa0o78XoLPHoUNumPRulv992FpmGnyeg&usqp=CAU',
    name: '이름',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNPDa0o78XoLPHoUNumPRulv992FpmGnyeg&usqp=CAU',
    name: '이름',
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNPDa0o78XoLPHoUNumPRulv992FpmGnyeg&usqp=CAU',
    name: '이름',
  },
];

const b = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];
