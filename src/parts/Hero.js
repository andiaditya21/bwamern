import React from "react";
import ImageHero from "assets/image/photo/banner.jpg";
import ImageHero_frame from "assets/image/photo/frame_banner.jpg";
import IconCities from "assets/image/icon/ic-cities.svg";
import IconTraveller from "assets/image/icon/ic-traveller.svg";
import IconTreasure from "assets/image/icon/ic-treasure.svg";

import formatNumber from "utils/formatNumber";
import Button from "elements/Button";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30, //refMostPicked belum dibuat
      behavior: "smooth",
    });
  }

  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          {/* line-height-1 styling manual */}
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTraveller}
                alt={`${props.data.travelers} Traveller`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-500">Traveller</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-500">Treasure</span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-500">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 606, height: 458, marginTop: 80 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }} //jika styling margin > 1 sisi, maka pake "" dan pake px. jika cuman 1 sisi styling margin, tidak perlu pake
            />
            <img
              src={ImageHero_frame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -20px -20px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
