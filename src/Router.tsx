import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Feed from './pages/Feed/Feed';
import Map from './pages/Map/Map';
import MyPage from './pages/MyPage/MyPage';
import Present from './pages/Present/Present';

const style = {
  border: '1px solid red',
  width: '450px',
  height: '800px',
  overflow: 'scroll',
};

const Router = () => {
  return (
    <BrowserRouter>
      <div style={style}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/map" element={<Map />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
