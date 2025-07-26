import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";

function Day03() {
  return (
    // <Flex vertical gap="1rem">
    //   <Input
    //     placeholder="Enter your name"
    //     addonAfter="@dbbl.com"
    //     prefix={<MailOutlined />}
    //   />
    //   <Input.Password />
    //   <Input.TextArea />
    //   <Input.Search />
    // </Flex>
    <LoginForm />
  );
}

export default Day03;

interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const LoginForm: React.FC = () => {
  const onFinish = (values: LoginFormValues) => {
    console.log("Received values: ", values);
  };

  return (
    <Form
      name="login"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 20,
      }}
    >
      <Form.Item<LoginFormValues>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item<LoginFormValues>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Please input your password!"
        />
      </Form.Item>
      <Form.Item<LoginFormValues> name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
