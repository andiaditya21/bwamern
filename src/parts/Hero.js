import React from "react";
import ImageHero from "assets/image/photo/banner.jpg";
import ImageHero_frame from "assets/image/photo/frame_banner.jpg";
import IconCities from "assets/image/icon/ic-cities.svg";
import IconTraveller from "assets/image/icon/ic-traveller.svg";
import IconTreasure from "assets/image/icon/ic-treasure.svg";

import Button from "elements/Button";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30, //refMostPicked belum dibuat
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 422 }}>
          {/* line-height-1 styling manual */}
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
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

          <div className="row mt-5">
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTraveller}
                alt={`${props.data.travelers} Traveller`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-500">Traveller</span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
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
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-500">Cities</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
