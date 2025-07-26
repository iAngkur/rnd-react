import { Input } from "antd";

const { Search } = Input;

function ProductSearch() {
  return (
    <Search
      placeholder="Search products by name or SKU..."
      allowClear
      enterButton
      style={{ width: 300 }}
    />
  );
}

export default ProductSearch;
