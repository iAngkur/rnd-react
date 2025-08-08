import {
  HeartFilled,
  LikeFilled,
  LayoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
