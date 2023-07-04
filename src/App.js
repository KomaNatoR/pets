import { Routes, Route, Navigate } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NoticesPage from "./pages/NoticesPage/NoticesPage";
import NoticesCategoriesList from "./pages/NoticesPage/noticesElem/NoticesCategoriesList";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import RegPage from "pages/AuthPages/RegPage/RegPage";
import LoginPage from "pages/AuthPages/LoginPage/LoginPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage/>}>
          <Route index element={<Navigate to="/notices/sell"/>}/>
          <Route path=":categoryName" element={<NoticesCategoriesList/>}/>
        </Route>
        <Route path="/friends" element={<FriendsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
//  element={<NoticesPage/>}