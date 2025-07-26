import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  ProductOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            margin: 16,
            borderRadius: 8,
            color: "white",
            fontSize: collapsed ? 18 : 16,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {collapsed ? "A" : "Admin"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
            { key: "2", icon: <UserOutlined />, label: "Users" },
            { key: "3", icon: <ProductOutlined />, label: "Products" },
            { key: "4", icon: <SettingOutlined />, label: "Settings" },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 20px",
            background: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Admin Panel
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            borderRadius: 8,
          }}
        >
          <Typography>
            <Title>Welcome to the Admin Panel</Title>
            <Paragraph>This is a sample admin panel layout.</Paragraph>
          </Typography>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
