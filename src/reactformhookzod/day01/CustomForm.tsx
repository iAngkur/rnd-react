import React, { useState } from "react";
import { Button, Card, Form, Input, InputNumber } from "antd";

const { Item } = Form;

interface FormInputType {
  name: string;
  age: number;
}

function CustomForm() {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (values: FormInputType) => {
    console.log("Values ::> ", values);
  };

  return (
    <Card style={{ maxWidth: "300px", marginInline: "auto" }}>
      <Form
        layout="vertical"
        style={{ maxWidth: 300, marginInline: "auto" }}
        scrollToFirstError
        onFinish={handleSubmit}
      >
        <Item label="Name" name="name" style={{ marginBottom: "8px" }}>
          <Input placeholder="John Doe" />
        </Item>
        <Item label="Age" name="age">
          <InputNumber placeholder="18" style={{ width: "100%" }} />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Item>
      </Form>
    </Card>
  );
}

export default CustomForm;
