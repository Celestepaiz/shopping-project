import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddProductBtn = ({ addProduct }) => {
  const generateRandomProduct = () => {
    const id = (Math.floor(Math.random() * 3) + 1).toString();
    return {
      id,
      quantity: 1,
      price: 1.0,
      name: `product name ${id}`,
    };
  };
  return (
    <div>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => addProduct(generateRandomProduct())}
      >
        Add Product
      </Button>
    </div>
  );
};

export default AddProductBtn;
