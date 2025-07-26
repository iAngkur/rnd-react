import React from "react";
import { Space, Table, Tag, type TableProps } from "antd";
import { CheckOutlined, MinusCircleOutlined } from "@ant-design/icons";

interface User {
  key: string;
  name: string;
  age: number;
  email: string;
  role: "Admin" | "User" | "Editor";
  isActive: boolean;
}

const columns: TableProps<User>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (role) => (
      <Tag
        color={
          role === "Admin" ? "red" : role === "Editor" ? "geekblue" : "green"
        }
      >
        {role}
      </Tag>
    ),
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) =>
      record.isActive ? (
        <Space>
          <CheckOutlined style={{ color: "green" }} />
          Active
        </Space>
      ) : (
        <Space>
          <MinusCircleOutlined style={{ color: "red" }} />
          Inactive
        </Space>
      ),
  },
];

const data: User[] = [
  {
    key: "1",
    name: "John Doe",
    age: 32,
    email: "johndoe@example.com",
    role: "Admin",
    isActive: true,
  },
  {
    key: "2",
    name: "Jane Smith",
    age: 28,
    email: "janesmith@example.com",
    role: "User",
    isActive: false,
  },
  {
    key: "3",
    name: "Bob Johnson",
    age: 45,
    email: "bobjohnson@example.com",
    role: "Editor",
    isActive: true,
  },
  {
    key: "4",
    name: "Alice Brown",
    age: 35,
    email: "alicebrown@example.com",
    role: "User",
    isActive: true,
  },
  {
    key: "5",
    name: "Tom Wilson",
    age: 22,
    email: "tomwilson@example.com",
    role: "Admin",
    isActive: false,
  },
  {
    key: "6",
    name: "Sara Lee",
    age: 38,
    email: "saralee@example.com",
    role: "Editor",
    isActive: true,
  },
];

function Day04() {
  return <Table columns={columns} dataSource={data} size="small" />;
}

export default Day04;
