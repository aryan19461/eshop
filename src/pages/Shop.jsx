import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/shop.css";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    // Sofa products filtered
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }
     // Fashion products filtered
     if (filterValue === "Fashion") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fashion"
      );
      setProductsData(filteredProducts);
    }
    // mobile products filtered
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }
    // chair products filtered
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }
    // watch products filtered
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }
    // wireless products filtered
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  //Making search backend
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      
      <CommonSection title="VARIOUS PRODUCTS 🧥👚👖🎧⌚📱 " />

      <section>
        <Container>
          <Row>
            <Col lg="4" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                  <option value="Fashion">Fashion</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="search......"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-eye-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1>No products found 😞!!!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
