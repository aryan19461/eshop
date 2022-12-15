import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductList";
import "../styles/product-details.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ProductDetails = () => {
  //setting descending order
  const [tab, setTab] = useState("desc");
  //setting review users
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  //subbmit working
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName: productName,
        price,
      })
    );
    toast.success("🤗Product Added🤗");
  };
  /*
  useEffect(() => {
    Window.scrollTo(0.0);
  }, [products]);
  
  */
  // const [rating,setRating] = useState(null)
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;
  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    //printing reviews
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
    };
    console.log(reviewObj);
    toast.success("Thank you for the review 👋");
  };
  return (
    <>
      <Helmet title={productName}>
        <CommonSection />

        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="6">
                <img src={imgUrl} alt="" />
              </Col>
              <Col lg="6">
                <div className="product__details">
                  <h2>{productName}</h2>
                  <div className="product__rating d-flex align-items-center gap-5">
                    <div>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-half-fill"></i>
                      </span>
                    </div>
                    <p>({avgRating}) 🤩</p>
                  </div>

                  <div className="d-flex align-items-center gap-5 ">
                    <span className="product__price">Rs {price}</span>
                    <span>Category: {category.toUpperCase()}</span>
                  </div>
                  <p className="mt-3">{shortDesc}</p>
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="buy__btn"
                    onClick={addToCart}
                  >
                    ADD TO BAG
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="tab__wrapper d-flex align-items-center gap-5">
                  <h6
                    className={`${tab === "desc" ? "active__tab" : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Description{" "}
                  </h6>
                  <h6
                    className={`${tab === "rev" ? "active__tab" : ""}`}
                    onClick={() => setTab("rev")}
                  >
                    Reviews ({reviews.length})
                  </h6>
                </div>

                {tab === "desc" ? (
                  <div className="tab__content mt-5">
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="product__review">
                    <div className="review__wrapper">
                      <ul>
                        {reviews?.map((item, index) => (
                          <li key={index} className="mb-4">
                            <h6>Aryan</h6>
                            <span>{item.rating} (❤️)</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="review__form">
                        <h4>Leave your comment</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form__group">
                            <input
                              type="text"
                              placeholder="Enter Name"
                              ref={reviewUser}
                            />
                          </div>
                          {/*  <div className="form__group">
                            <span>
                              1 <i class="fas fa-star"></i>
                            </span>
                            <span>
                              2<i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              3<i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              4<i className="fa-solid fa-star"></i>
                            </span>
                            <span>
                              5<i className="fa-solid fa-star"></i>
                            </span>
                          </div>*/}
                          <div className="form__group">
                            <textarea
                              rows={5}
                              cols={120}
                              type="text"
                              placeholder="Review Message  "
                              ref={reviewMsg}
                            />
                          </div>
                          <motion.button
                            whileTap={{ scale: 1.1 }}
                            type="submit"
                            className="buy__btn"
                          >
                            SUBMIT
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </Col>
              <Col lg="12" className="mt-5">
                <h2 className="related__title">You might also like</h2>
              </Col>
              <ProductsList data={relatedProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default ProductDetails;
