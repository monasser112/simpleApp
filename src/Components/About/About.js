import React, { useEffect, useState } from "react";
import "./About.css";
import Bounce from "react-reveal/Bounce";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex  ">
        <div className="col-xs-12 col-md-12 col-lg-6 ">
          <img src="/images/club.jpg" style={{ width: "90%", height: "90%" }} />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-6  ">
          <span
            style={{
              backgroundColor: "#FDB515",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            About Us
          </span>
          <h3
            style={{
              color: "#0066B3",
            }}
          >
            Welcome To Madinaty Sporting Club
          </h3>
          <p
            style={{
              color: "#939598",
            }}
          >
            Madinaty Sporting Club is one of the biggest sports and cultural
            hubs in Egypt and the Middle East. It is a comprehensive sports
            facility covering 200 acres of land,fostering athletic excellence,
            community building, self-development, and more.
          </p>
          <p
            style={{
              color: "#939598",
            }}
          >
            The club is located in the thriving Madinaty City, developed by the
            Arab Company for Projects and Urban Development, Talaat Moustafa
            Group (TMG)
          </p>
          <p
            style={{
              color: "#939598",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            READ MORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
