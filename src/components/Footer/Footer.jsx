import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <div className="logo">
                <div>
                  <h1 className="text-black">ReactSHOP</h1>
                </div>
              </div>
              <p className="footer_text mt-4">
              "Shop your heart out with us! Our virtual shelves are stocked with the latest and greatest in fashion, tech, beauty, and more. From trendy must-haves to timeless classics, we've got everything you need to elevate your style game. With fast shipping, easy returns, and unbeatable prices, there's no better place to indulge in a little retail therapy. So what are you waiting for? Start browsing and treat yourself today!"
              </p>
            </Col>

            <Col className="column" lg="3">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Top-Categories</h4>
                <ListGroup className="categories">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Mobile Phones</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Modern-Sofa</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Arm-Chair</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Smart Watch</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg="2">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Useful Links</h4>

                <ListGroup>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/shop">SHOP</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/cart">Cart</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/login">Login</Link>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg="3">
              <div className="footer__quick-links">
                <h4 className="quick__links-title">Contact</h4>
                <ListGroup className="footer__contact">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="fa-sharp fa-solid fa-location-dot"></i>
                    </span>
                    <p>New Delhi, Delhi </p>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="fa-solid fa-microphone-lines"></i>
                    </span>
                    <p>123446789</p>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="fa-solid fa-envelopes-bulk"></i>
                    </span>
                    <p>react@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col>
              <p className="footer__copyright">Copyright {year} </p>
            </Col>
          </Row>
        </Container>
       <Container>
       <div className="frm_submit">
            <Button className="feed"> 
            <Link to="/review">Feedback for Better understanding </Link>
            </Button>
       </div>
       </Container>
      </footer>
    </>
  );
};

export default Footer;
