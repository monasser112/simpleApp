import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import PaymentIcon from "@material-ui/icons/Payment";

import "./header.css";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavBar] = useState(false);

  const toggle = () => {
    setMenu(!menu);
  };

  const checkBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", checkBackground);

  const show = menu ? "show " : "";
  console.log(window.innerWidth);
  return (
    <>
      {/* <NavBar /> */}
      <div className="containerr">
        <nav
          style={{
            background: "transparent",
            // position: "absolute",
            zIndex: 999,
            //top: 0,
          }}
          className={
            navbar
              ? "navbar  navbar-expand-sm  bg-light navbar-light  fixed-top"
              : "navbar  navbar-expand-sm bg-transparent  fixed-top"
          }
        >
          <span className="navbar-brand">
            <img
              src="/images/madinaty.png"
              style={{
                width: "100px",
                height: "100px",
                background: "transparent",
              }}
            />
          </span>
          <button className="navbar-toggler" onClick={() => toggle()}>
            <span className="navbar-toggler-icon "></span>
          </button>

          <div
            className={
              "collapse navbar-collapse  justify-content-center " + show
            }
          >
            <ul className="navbar-nav">
              <li className="nav-item  nav-link ">
                <h6>About Us</h6>
              </li>
              <li className="nav-item nav-link ">
                <h6>Membership</h6>
              </li>
              <li className="nav-item nav-link ">
                <h6>Sports&Academics</h6>
              </li>
              <li className="nav-item nav-link ">
                <h6>Cultural Center</h6>
              </li>
              <li className="nav-item nav-link ">
                <h6>Services</h6>
              </li>
              <li className="nav-item nav-link ">
                <h6>Media</h6>
              </li>
              <li className="nav-item nav-link ">
                <SearchIcon />
              </li>
              <li className="nav-item nav-link ">
                <PaymentIcon />
              </li>
            </ul>
          </div>
        </nav>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/swimming pool.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <div>
                <h1>one of the largest sports clubs in egypt</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/cafe.jpg"
              alt="second slide"
            />
            <Carousel.Caption>
              <h1>Engaging Spaces</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Gym.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Fully Equipped Modern Facilities</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Playground.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h1>Athletic Excellence & Community Building</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Laptop.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h1>Payment Packages for your convenience</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Header;
// <Container fluid style={{ height: "600px" }}>
//   <Row className="h-100">
//     <Col></Col>
//     <Col></Col>
//   </Row>
// </Container>
