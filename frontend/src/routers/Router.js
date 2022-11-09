import React, { Suspense } from "react";
import "./Router.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import MainNavBar from "../components/common/MainNavBar.js";
import Main from "../screens/Main.js";
import Analysis from "../screens/analysis/Analysis";
import Community from "../screens/Community.js";
import Ranking from "../screens/Ranking.js";
import Login from "../screens/Login.js";
import Join from "../screens/Join.js";
import MyPage from "../screens/MyPage.js";
import SupportList from "../components/community/SupportList.js";
import ShareList from "../components/community/ShareList.js";
import RequestList from "../components/community/RequestList.js";

function Router() {
  const location = useLocation();
  return (
    <div className="router">
      <Suspense>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={1000}
          >
            <Routes location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/article">
                <Route index element={<Community />} />
                <Route path="support" element={<SupportList />} />
                <Route path="share" element={<ShareList />} />
                <Route path="request" element={<RequestList />} />
              </Route>
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/anal" element={<Analysis />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </div>
  );
}

export default Router;

