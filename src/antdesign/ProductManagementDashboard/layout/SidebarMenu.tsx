import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

function SidebarMenu() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["products"]}
      theme="dark"
      style={{
        height: "100%",
        borderRight: 0,
      }}
      items={[
        {
          key: "products",
          icon: <AppstoreOutlined />,
          label: "Products",
        },
        {
          key: "customers",
          icon: <UserOutlined />,
          label: "Customers",
        },
        {
          key: "settings",
          icon: <SettingOutlined />,
          label: "Settings",
        },
      ]}
    />
  );
}

export default SidebarMenu;
