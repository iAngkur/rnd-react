import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import React from "react";

interface RegistrationFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditions: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { Title } = Typography;

function RegistrationForm() {
  const onFinish = (values: RegistrationFormValues) => {
    console.log("Received values: ", values);
  };

  const validateConfirmPassword: any = ({ getFieldValue }: any) => ({
    validator(_: any, value: string) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("The two passwords do not match!"));
    },
  });

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Create an Account
      </Title>

      <Form<RegistrationFormValues>
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "0 auto" }}
        scrollToFirstError
        requiredMark
      >
        <Form.Item<RegistrationFormValues>
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="John Doe" />
        </Form.Item>
        <Form.Item<RegistrationFormValues>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="johndoe@example.com" />
        </Form.Item>
        <Form.Item<RegistrationFormValues>
          label="Password"
          name="password"
          hasFeedback
          rules={[
            { required: true, message: "Please input your password" },
            { min: 6, message: "Password must be at least 6 characters long!" },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="***" />
        </Form.Item>
        <Form.Item<RegistrationFormValues>
          label="Confrim Password"
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please input password again" },
            validateConfirmPassword,
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="***" />
        </Form.Item>
        <Form.Item<RegistrationFormValues>
          label=""
          name="termsAndConditions"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "You must accept the terms and conditions",
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>Terms & Conditions</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegistrationForm;
