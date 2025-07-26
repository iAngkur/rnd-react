import { DashboardOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

const {Title, Text, Paragraph} = Typography;

function Day02() {
  return (
    // <Typography>
    //     <Title level={1}>Main Heading</Title>
    //     <Title level={3} type='secondary'>Subheading</Title>
    //      <Paragraph>
    //         This is a paragraph with <Text strong>bold text</Text> and <Text code>code</Text>.
    //      </Paragraph>
    //      <Text type='danger'>Warning: Something went wrong!</Text>
    // </Typography>

    <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible>
        <div style={{ height: 32, background: 'rgba(255,255,255,0.2)', margin: 16, borderRadius: 8 }} />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={[
            { key: '1', icon: <DashboardOutlined />, label: 'Dashboard' },
            { key: '2', icon: <UserOutlined />, label: 'Users' },
            { key: '3', icon: <SettingOutlined />, label: 'Settings' },
          ]}
        />
        </Sider>
        <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 20 }}>Admin Panel</div>
        </Header>
        <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff', borderRadius: 8 }}>
          <p>Welcome to the admin dashboard!</p>
          <p>This is the main content area.</p>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Day02