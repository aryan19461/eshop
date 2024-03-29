import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector(state=> state.cart.totalAmount);
  return (
    <>
      <Helmet title="cart">
        <CommonSection title="What's in your 🛍️" />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                {cartItems.length === 0 ? (
                  <h2 className="fs-4 text-center">
                    No item added to the cart
                  </h2>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                )}
              </Col>

              <Col lg="3">
                <div>
                  <h6 className="d-flex align-items-center justify-content-between">Sub-total
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                  </h6>

                </div>
                <p>Taxes and shipping charges will be calculated here</p>
                <div>
                  <button className="buy__btn"> <Link to="/shop">Continue Shopping</Link></button>
                  <br />
                  <button className="buy__btn"> <Link to="/checkout">Checkout </Link> </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

const Tr = ({ item }) => {
  //deleting cart items
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.button
          whileTap={{ scale: 1.1 }}
          className="buy__btn"
          onClick={deleteProduct}
        >
          Delete
        </motion.button>
      </td>
    </tr>
  );
};

export default Cart;
