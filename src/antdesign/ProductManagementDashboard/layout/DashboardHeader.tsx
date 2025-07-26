import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Select, Typography } from "antd";
import React, { useState } from "react";
import AddProduct from "../product/AddProduct";

const { Text } = Typography;


function DashboardHeader() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        style={{
          padding: "0 20px",
          height: 64,
          borderBottom: "1px solid #d9d9d9",
        }}
      >
        <Text strong style={{ fontSize: 18 }}>
          Admin Panel
        </Text>
        <Button type="primary" size="large" onClick={() => setOpenModal(true)}>
          Add Product
        </Button>
        <Avatar
          icon={<UserOutlined />}
          style={{ backgroundColor: "#1890ff" }}
        />
      </Flex>
      <AddProduct openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}

export default DashboardHeader;
