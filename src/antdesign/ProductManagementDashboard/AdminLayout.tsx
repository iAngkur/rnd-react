import { Layout } from "antd";
import SidebarMenu from "./layout/SidebarMenu";
import DashboardHeader from "./layout/DashboardHeader";
import type React from "react";

const { Sider, Content } = Layout;

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={240} collapsible>
        <div
          style={{
            height: 32,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            margin: "16px 16px",
            borderRadius: 8,
          }}
        ></div>
        <SidebarMenu />
      </Sider>
      <Layout>
        <DashboardHeader />
        <Content style={{ margin: 0, padding: 0 }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
