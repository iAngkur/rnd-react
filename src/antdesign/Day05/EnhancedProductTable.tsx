import Icon, {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import {
  Dropdown,
  Input,
  Modal,
  Typography,
  Table,
  Tag,
  type TableProps,
  Tooltip,
  Popconfirm,
} from "antd";
import React, { useState } from "react";

const { Text } = Typography;

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

function EnhancedProductTable() {
  const [searchText, setSearchText] = React.useState("");
  const [selectedProdct, setSelectedProduct] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

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

  const handleDelete = (key: string) => {
    console.log("Deleted: ", key);
  };

  const renderActions = (record: Product) => {
    const dropdownItems = [
      {
        key: "edit",
        // label: "Edit",
        icon: <EditOutlined />,
        // onClick: () => {
        //   setSelectedProduct(record);
        //   setOpen(true);
        // },
        label: (
          <span
            onClick={() => {
              setSelectedProduct(record);
              setOpen(true);
            }}
          >
            Edit
          </span>
        ),
      },
      {
        key: "delete",
        // label: "Delete",
        danger: true,
        icon: <DeleteOutlined />,
        // onClick: () => {
        //   alert("Delete " + record);
        // },
        label: (
          <Popconfirm
            title="Delete this proeduct?"
            description={`Are you sure to delete ${record.name}?`}
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <span>Delete</span>
          </Popconfirm>
        ),
      },
    ];

    return (
      <Tooltip title="Actions">
        <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
          <MoreOutlined style={{ fontSize: 16, cursor: "pointer" }} />
        </Dropdown>
      </Tooltip>
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
      <Modal open={open} onCancel={() => setOpen(false)}>
        {selectedProdct && (
          <div>
            <p>
              <Text strong>Product Name:</Text>
              {selectedProdct.name}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

export default EnhancedProductTable;
