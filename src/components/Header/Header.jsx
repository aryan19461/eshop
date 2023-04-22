import React, { useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./header.css";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  //navigaton
  const navigate = useNavigate();
  //making header scroll fix
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  //making menu items accessible in responsive state
  const menuRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  //defining toggle fuction for menu in responsive state
  const menuToggle = () => menuRef.current.toggle("active__menun");
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <header className="sticky__header">
        <Container>
          <Row>
            <div className="nav__wrapper">
              <motion.div whileHover={{ scale: 1.5 }} className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>ReactSHOP</h1>
                </div>
              </motion.div>

              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : " "
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav__icons">
                <span className="fav__icon">
                  <i class="fa fa-gratipay"></i>
                  <span className="badge">1</span>
                </span>

                <span className="cart__icon" onClick={navigateToCart}>
                  <i class="fa fa-cart-plus"></i>
                  <span className="badge">{totalQuantity}</span>
                </span>

                <span>
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    src={user_icon}
                    alt=""
                  />
                </span>
                <div className="mobile__menu">
                  <span onClick={menuToggle}>
                    <i class="fa fa-solid fa-bars"></i>
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
