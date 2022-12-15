import React from "react";

import { motion } from "framer-motion";
import { Col } from "react-bootstrap";
import "../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <>
      <Col lg="3" md="4" className="mb-2">
        <div className="product__item">
          <div className="product__img">
            <motion.img
              whileHover={{ scaleX: 1.4, scaleY: 0.9 }}
              src={item.imgUrl}
              alt="img"
            />
          </div>

          <div>
            <h3 className="p-2 product__info">
              <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </h3>
            <span className="text-center d-block">{item.category}</span>
          </div>

          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">
              <span>
                {" "}
                <i className="fa-fa-inr"></i>
                {item.price}
              </span>
            </span>
            <motion.span whileTap={{ scale: 2 }} onClick={addToCart}>
              <i class="fa fa-cart-plus"></i>
            </motion.span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
