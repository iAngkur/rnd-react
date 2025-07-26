import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  Upload,
} from "antd";
import React, { useState } from "react";

const { Option } = Select;

type AddProductProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddProduct({ openModal, setOpenModal }: AddProductProps) {
  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Received values of form: ", values);
        setConfirmLoading(true);

        setTimeout(() => {
          setConfirmLoading(false);
          setOpenModal(false);
          form.resetFields();
        }, 2000);
      })
      .catch((info) => {
        console.log("Validation failed: ", info);
      });
  };

  return (
    <Modal
      open={openModal}
      title="Add Product"
      onOk={handleOk}
      onCancel={() => {
        setOpenModal(false);
        form.resetFields();
      }}
      confirmLoading={confirmLoading}
      okText="Save"
      style={{ top: 20 }}
      maskClosable={false}
      width={720}
    >
      <Form
        form={form}
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        layout="vertical"
        style={{
          padding: "24px 16px",
          maxWidth: 600,
          margin: "0 auto",
        }}
        autoComplete="off"
        initialValues={{ stock: true, category: "electronics" }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Product Name"
              name="name"
              rules={[
                { required: true, message: "Please enter product name!" },
              ]}
            >
              <Input placeholder="Laptop" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="SKU"
              name="sku"
              rules={[{ required: true, message: "SKU is required!" }]}
            >
              <Input placeholder="e.g., WH-001" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select a category!" }]}
            >
              <Select placeholder="Select Category">
                <Option value="electronics">Electronics</Option>
                <Option value="clothing">Clothing</Option>
                <Option value="books">Books</Option>
                <Option value="home">Home & Kitchen</Option>
                <Option value="beauty">Beauty & Personal Care</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                },
                {
                  type: "number",
                  min: 0.01,
                  message: "Must be greater than 0",
                },
              ]}
            >
              <InputNumber
                placeholder="0.00"
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
                addonAfter="USD"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please add a description!" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Describe the product features, materials, dimensions, etc."
            showCount
            maxLength={500}
          />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="In Stock"
              name="stock"
              valuePropName="checked"
              initialValue={true}
            >
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                defaultChecked
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Product Image">
              <Upload
                name="image"
                beforeUpload={() => false} // Prevent auto-upload (for demo)
                maxCount={1}
                accept="image/*"
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddProduct;
