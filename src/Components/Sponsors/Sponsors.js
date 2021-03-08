import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="mt-5 container  ">
      <div className="row justify-content-start">
        <div className="col-xs-12 col-md-12">
          <h2 className="title">Our Sponsors</h2>
        </div>
        <div className="d-flex justify-content-center mt-5  row">
          <div className="mx-3 col-xs-12">
            <img src="/images/Celia.png" />
          </div>

          <div className="mx-3 col-xs-12">
            <img src="/images/golf.png" />
          </div>

          <div className="mx-3 col-xs-12">
            <img src="/images/Lamar.png" />
          </div>

          <div className="mx-3 col-xs-12">
            <img src="/images/openAir.png" />
          </div>

          <div className="mx-3 col-xs-12">
            <img src="/images/privado.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
