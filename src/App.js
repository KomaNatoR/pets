import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const SharedLayout = lazy(() => import("./components/SharedLayout/SharedLayout"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const NoticesCategoriesList = lazy(() => import("./pages/NoticesPage/noticesElem/NoticesCategoriesList"));
const FriendsPage = lazy(() => import("./pages/FriendsPage/FriendsPage"));
const RegPage = lazy(() => import("pages/AuthPages/RegPage/RegPage"));
const LoginPage = lazy(() => import("pages/AuthPages/LoginPage/LoginPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

// import Loader from "components/shares/Loader/Loader";


function App() {

  return (
    <Suspense fallback={<p style={{ textAlign: "center", }}>...loading</p>}>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />}>
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesCategoriesList />} />
          </Route>
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

    </Suspense>
  );
}

export default App;
//  element={<NoticesPage/>}