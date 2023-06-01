import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Feed from './pages/Feed/Feed';
import Map from './pages/Map/Map';
import MyPage from './pages/MyPage/MyPage';
import Nav from './components/nav/Nav';
import MypageEditMyInfo from './pages/MyPage/MypageEditMyInfo';
import MypagePayAndAlarm from './pages/MyPage/MypagePayAndAlarm';
import MyeditPicture from './pages/MyPage/MyeditPicture';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/map" element={<Map />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/editMyInfo" element={<MypageEditMyInfo />} />
        <Route path="/payAndAlarm" element={<MypagePayAndAlarm />} />
        <Route path="/picturePage" element={<MyeditPicture />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
};

export default Router;
