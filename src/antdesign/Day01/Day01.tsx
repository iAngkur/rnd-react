import { BellOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Day01() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100vh",
            gap: "10px"
        }}>
            <Button type="primary" size="small">Primary Small Button</Button>
            <Button type="primary" loading>Loading Button</Button>
            <Button type="primary" icon={<BellOutlined />} shape="circle" />
            <Button type="primary" icon={<PlusOutlined />} iconPosition="end">Icon Text Button</Button>
            <Button type="primary" disabled>Disabled Button</Button>
            <Button type="default" size="middle">Default Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Text Button</Button>
            <Button onClick={() => {
                alert("Button clicked");
            }}>
                click
            </Button>
        </div>
    );
}

export default Day01;