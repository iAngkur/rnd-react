import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, Input, Space, Table, Tag, type TableProps } from "antd";
import React from "react";

type Product = {
  key: string;
  name: string;
  category: string;
  price: number;
  stockStatus: "in-stock" | "out-of-stock";
};

const products: Product[] = [
  {
    key: "1",
    name: "Laptop",
    category: "Electronics",
    price: 1000,
    stockStatus: "in-stock",
  },
  {
    key: "2",
    name: "T-shirt",
    category: "Clothing",
    price: 500,
    stockStatus: "out-of-stock",
  },
  {
    key: "3",
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    stockStatus: "in-stock",
  },
  {
    key: "4",
    name: "Jeans",
    category: "Clothing",
    price: 700,
    stockStatus: "in-stock",
  },
  {
    key: "5",
    name: "Book",
    category: "Books",
    price: 300,
    stockStatus: "out-of-stock",
  },
  {
    key: "6",
    name: "Headphones",
    category: "Electronics",
    price: 200,
    stockStatus: "in-stock",
  },
];

function ProductTable() {
  const [searchText, setSearchText] = React.useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns: TableProps<Product>["columns"] = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        { text: "Electronics", value: "Electronics" },
        { text: "Clothing", value: "Clothing" },
        { text: "Books", value: "Books" },
      ],
      onFilter: (value, record) => record.category === value,
      responsive: ["sm"],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Stock Status",
      dataIndex: "stockStatus",
      key: "stockStatus",
      render: (stockStatus) => (
        <Tag color={stockStatus === "in-stock" ? "green" : "red"}>
          {stockStatus === "in-stock" ? "In Stock" : "Out of Stock"}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => renderActions(record),
    },
  ];

  const renderActions = (record: Product) => {
    const dropdownItems = [
      {
        key: "edit",
        label: "Edit",
        onClick: () => {
          alert("Edit " + record);
        },
      },
      {
        key: "delete",
        label: "Delete",
        danger: true,
        onClick: () => {
          alert("Delete " + record);
        },
      },
    ];

    return (
      <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
        <MoreOutlined style={{ fontSize: 16, cursor: "pointer" }} />
      </Dropdown>
    );
  };

  return (
    <>
      <Input.Search
        placeholder="Search products..."
        value={searchText}
        onSearch={(value) => {
          setSearchText(value);
        }}
        onChange={(e) => setSearchText(e.target.value)}
        allowClear
        style={{
          marginBottom: 16,
          maxWidth: 300,
        }}
        enterButton
        onClear={() => setSearchText("")}
      />
      <Table<Product>
        rowKey="key"
        columns={columns}
        dataSource={filteredProducts}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
      />
    </>
  );
}

export default ProductTable;
