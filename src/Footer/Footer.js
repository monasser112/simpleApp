import { yellow } from "@material-ui/core/colors";
import React from "react";
import "./Footer.css";
import { TextField } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="mt-5" style={{ backgroundColor: "#000000" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex flex-column">
              <h6 className="fontColor mt-4">Location</h6>
              <p className="paragraphColor">
                Madinaty is located at Km 33 of the Cairo-Suez rd, a short
                ten-minute drive from Heliopolis, and 30-minute from downtown
                Cairo. Madinaty Sporting Club is in the heart of Madinaty along
                Madinaty Road,
              </p>
              <p style={{ color: "#FDB515", textDecoration: "underline" }}>
                Get Direction
              </p>
              <p style={{ color: "white" }}>For more Information</p>
              <p style={{ color: "#FDB515", textDecoration: "underline" }}>
                01142020220
              </p>
              <p style={{ color: "white", fontSize: "0.8    rem" }}>
                &copy;2021. All rights reserved. | Developed & Designed by
                PSdigital{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column">
              <h6 className="fontColor mt-4">Other Links</h6>
              <p className="fontColorGrey">Sports & Academics</p>
              <p className="fontColorGrey">Media</p>
              <p className="fontColorGrey">Trips</p>
              <p className="fontColorGrey">Contact us</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column">
              <h6 className="fontColor mt-4">About US</h6>
              <p className="fontColorGrey pt-1">Membership</p>
              <p className="fontColorGrey">Sports & Academics</p>
              <p className="fontColorGrey">Cultural Center</p>
              <p className="fontColorGrey">Services</p>
              <p className="fontColorGrey">Media</p>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="fontColor mt-4">NewsLetter</h6>
            <div
              style={{
                backgroundColor: "#CDCDCD",
                position: "relative",
              }}
              className="d-flex flex-row"
            >
              <TextField variant="filled" placeholder="Enter Your Email..." />
              <span
                style={{
                  position: "absolute",
                  right: "2%",
                  top: "40%",
                  color: "grey",
                }}
              >
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
