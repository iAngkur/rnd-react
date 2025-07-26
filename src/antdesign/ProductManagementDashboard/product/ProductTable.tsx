import { MoreOutlined } from "@ant-design/icons";
import { Table, Tag, type TableProps } from "antd";
import React from "react";

interface Product {
  key: string;
  name: string;
  category: string;
  price: number;
  stock: "in-stock" | "out-of-stock";
  sku: string;
}

const products: Product[] = [
  {
    key: "1",
    name: "Laptop",
    category: "Electronics",
    price: 1299,
    stock: "in-stock",
    sku: "LT-001",
  },
  {
    key: "2",
    name: "T-Shirt",
    category: "Clothing",
    price: 29.99,
    stock: "out-of-stock",
    sku: "TS-002",
  },
  {
    key: "3",
    name: "Smartphone",
    category: "Electronics",
    price: 699.99,
    stock: "in-stock",
    sku: "SP-003",
  },
];

function ProductTable() {
  const productColumns: TableProps<Product>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock: string) => (
        <Tag color={stock === "in-stock" ? "green" : "red"}>{stock}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => <MoreOutlined style={{ cursor: "pointer" }} />,
    },
  ];

  return (
    <>
      <Table columns={productColumns} dataSource={products} />
    </>
  );
}

export default ProductTable;
