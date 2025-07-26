import { Select, Space } from "antd";
import React from "react";

const { Option } = Select;

function ProductFilters() {
  return (
    <Space>
      <Select placeholder="Category" style={{ width: 150 }}>
        <Option value="electronics">Electronics</Option>
        <Option value="clothing">Clothing</Option>
        <Option value="books">Books</Option>
      </Select>
      <Select placeholder="Stock Status" style={{ width: 150 }}>
        <Option value="in-stock">In Stock</Option>
        <Option value="out-of-stock">Out of Stock</Option>
      </Select>
    </Space>
  );
}

export default ProductFilters;
