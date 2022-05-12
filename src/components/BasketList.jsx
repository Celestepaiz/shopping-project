import React from "react";
import { connect } from "react-redux";
import { deleteProduct, addNewProduct } from "../store/actions";
import AddProductBtn from "./AddProductBtn.jsx";
import { Card, Row, Col, Button, Statistic, Typography, Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const BasketList = ({
  products = [],
  deleteProd,
  addProduct,
  totalPrice = 0.0,
}) => {
  return (
    <div>
      <Row gutter={[24, 24]}>
        {products.map(({ id, name, quantity, price }, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={8}>
            <Card
              title={<p>Name: {name}</p>}
              extra={
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  key={index}
                  onClick={() => deleteProd(id)}
                >
                  Delete
                </Button>
              }
              hoverable
              key={index}
            >
              <Row>
                <Col span={12}>
                  <Statistic title="Quantity" value={quantity} />
                </Col>
                <Col span={12}>
                  <Statistic title="Price" value={price} />
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <Divider />
      <Row justify="center">
        <Typography.Title level={3}>Total Price: {totalPrice}</Typography.Title>{" "}
      </Row>
      <Row justify="center">
        <AddProductBtn addProduct={addProduct} />
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  const products = state.basket.products;
  return {
    products,
    totalPrice: products.reduce(
      (p, { price, quantity }) => p + price * quantity,
      0
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProd: (id) => dispatch(deleteProduct(id)),
    addProduct: (product) => dispatch(addNewProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
