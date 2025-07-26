import { UserOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Space } from "antd";
import Title from "antd/es/typography/Title";


export default function DashboardHeader() {
    return (
        <Flex justify="space-between" align="center">
            <Title level={3} style={{margin: 0}}>My Admin Dashboard</Title>
            <Space align="center">
                <Button icon={<UserOutlined />}>Login</Button>
                <Button type="primary">Sign Up</Button>
                <Button type="link">Help</Button>
            </Space>
        </Flex>
    );
}