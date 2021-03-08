import React from "react";

const News = () => {
  return (
    <div
      className="mt-5 container-fluid "
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="row justify-content-center ">
        <div className="col-xs-12 col-lg-8">
          <h1 className="mb-5" style={{ color: "#0065B2" }}>
            Our News
          </h1>
          <img className="d-block" src="/images/Ad.jpg" />
          <p style={{ color: "#FDB515" }}>Oct 29,2020</p>
          <p style={{ color: "#0066B3", fontWeight: "bold" }}>Mouled El Nabi</p>
          <p style={{ color: "grey" }}>
            Kindly be informed that the 29th of October is an official holiday .
          </p>
          <p style={{ color: "grey" }}>
            Membership & Adminstrative offices will be closed
          </p>
          <p
            style={{
              color: "grey",
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

export default News;
