import React from "react";
import "./Sports.css";
import { Carousel, CarouselItem } from "react-bootstrap";

const Sports = () => {
  const SportsCategories = [
    {
      sport: "football",
      desc: "under the supervision of captain Tarek Khairy",
      image: "/images/football.jpg",
    },
    {
      sport: "Swimming",
      desc:
        "At TM, a team  of expert coaches trained at teaching kids  of all ages",
      image: "/images/swimming.jpg",
    },

    {
      sport: "Gymnastics",
      desc: "gymnastics",
      image: "/images/gymnastics.jpg",
    },
    {
      sport: "Basketball",
      desc: "Headed by captain tarek Khair",
      image: "/images/basketball.jpg",
    },
    {
      sport: "Handball",
      desc:
        "The Academy is headed by Captain Hossam Gharib , Head of Operations El Zamalek Club",
      image: "/images/football.jpg",
    },
  ];

  return (
    <>
      <div className="Wrapper mt-5">
        <div className="item">
          <h3
            style={{
              color: "#0066B3",
            }}
          >
            SPORTS & ACADEMICS
          </h3>
        </div>
        <div className="item">
          <p
            style={{
              color: "#939598",
            }}
          >
            Enjoy a wide range of world-class academies, like Liverpool Football
            Academy, and Special Needs Sports, learning at the hands of expert
            coaches at the best sports community in Cairo.
          </p>
        </div>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="/images/football.jpg" />
            <Carousel.Caption>
              <div
                style={{
                  position: "absolute",
                  left: "-15%",
                  bottom: "300%",
                }}
              >
                <h3 style={{ color: "#FDB515" }}>Football</h3>
                <p>under the supervision of captain Tarek Khairy</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/images/swimming.jpg" />
            <Carousel.Caption>
              <div
                style={{
                  position: "absolute",
                  left: "-15%",
                  bottom: "300%",
                }}
              >
                <h3 style={{ color: "#FDB515" }}>Swimming</h3>
                <p>
                  At TM, a team of expert coaches trained at teaching kids of
                  all ages
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/images/gymnastics.jpg" />
            <Carousel.Caption>
              <div
                style={{
                  position: "absolute",
                  left: "-15%",
                  bottom: "300%",
                }}
              >
                <h3 style={{ color: "#FDB515" }}>Gymnastics</h3>
                <p>gymnastics</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/images/basketball.jpg" />
            <Carousel.Caption>
              <div
                style={{
                  position: "absolute",
                  left: "-15%",
                  bottom: "300%",
                }}
              >
                <h3 style={{ color: "#FDB515" }}>Basketball</h3>
                <p>Headed by captain tarek Khair</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src="/images/handball.jpg" />
            <Carousel.Caption>
              <div
                style={{
                  position: "absolute",
                  left: "-15%",
                  bottom: "300%",
                }}
              >
                <h3 style={{ color: "#FDB515" }}>Handball</h3>
                <p>
                  The Academy is headed by Captain Hossam Gharib , Head of
                  Operations El Zamalek Club
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Sports;
