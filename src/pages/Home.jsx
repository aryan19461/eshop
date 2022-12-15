import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";
const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProducts, setTrendingProducts] = useState([]);

  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const [mobileProducts, setMobileProducts] = useState([]);

  const [wirelessProducts, setWirelessProducts] = useState([]);

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero__section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <p className="hero__subtitle">Trending Product in {year}</p>
                  <h2>Make Your Choice Modern and Beautiful</h2>
                  <p>Order what you need to make your home beautiful</p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                    <Link to="shop">SHOP-NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services />
        <section className="trending__products">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Trending Products</h2>
              </Col>
              <ProductList data={trendingProducts} />
            </Row>
          </Container>
        </section>

        <section className="best__sales">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Top Sales</h2>
              </Col>
              <ProductList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>

        <section className="timer__count">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="clock__top-content">
                  <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                  <h3 className="text-white fs-5 mb-3">Quality Products</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn store__btn"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg="6" md="6" className="text-end">
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="new__arrival mb-5">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">New Arrivals</h2>
              </Col>
              <ProductList data={mobileProducts} />
              <ProductList data={wirelessProducts} />
            </Row>
          </Container>
        </section>

        <section className="popular__category mb-5">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="section__title">Popular in Categorry</h2>
              </Col>
              <ProductList data={popularProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
