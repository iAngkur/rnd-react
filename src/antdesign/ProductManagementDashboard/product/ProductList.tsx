import { Card, Space } from "antd";
import React from "react";
import ProductTable from "./ProductTable";
import ProductSearch from "./ProductSearch";
import ProductFilters from "./ProductFilters";

function ProductList() {
  return (
    <Card
      title="Prodducts"
      extra={
        <Space>
          <ProductSearch />
          <ProductFilters />
        </Space>
      }
      style={{
        margin: "24px 16px",
      }}
    >
      <ProductTable />
    </Card>
  );
}

export default ProductList;
