import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PaymentIcon from "@material-ui/icons/Payment";
import "./NavBar.css";
const NavBar = () => {
  const [navbar, setNavBar] = useState(false);

  const checkBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", checkBackground);
  return (
    <>
      <ul className={navbar ? "NavBarStyle active " : "NavBarStyle  "}>
        <span style={{ position: "relative", right: 350, top: 0 }}>
          <img
            src="/images/madinaty.png"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </span>

        <span style={{ position: "relative", left: 750, top: 20 }}>
          <SearchIcon />
        </span>
        <span style={{ position: "relative", left: 780, top: 20 }}>
          <PaymentIcon Icon />
        </span>

        <li className="listStyle mx-2 mt-4">
          <h6>About Us</h6>
        </li>
        <li className="listStyle mx-2 mt-4">
          <h6>Membership</h6>
        </li>
        <li className="listStyle mx-2 mt-4">
          <h6>Sports & Academics</h6>
        </li>
        <li className="listStyle mx-2 mt-4">
          <h6>Cultural Center</h6>
        </li>
        <li className="listStyle mx-2 mt-4">
          <h6>Services</h6>
        </li>
        <li className="listStyle mx-2 mt-4">
          <h6>Media</h6>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
