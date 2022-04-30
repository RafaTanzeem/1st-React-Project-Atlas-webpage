import React from "react";
import "./Rectangle3.css";
import pic3 from "./img/Photon-Atlas-Icon-Graphics-02-p-500 1.png";
import pic32 from "./img/Photon-Atlas-Icon-Graphics-03 1.png";
import pic33 from "./img/pic33.png";

export default function Rectangle3() {
  return (
    <div>
      <div className="rectangle3 container-fluid">
        <div className="rectangle3-content">
          <div className="box row">
            <div className="col offset-md-1 offset-xl-3 mt-5">
              <img src={pic3} alt="" />
              <h2>WHO WE ARE</h2>
              <p>
                Photon Atlas is a Human Resources Network for the Safex
                Blockchain, Safex Market, and the
                <br />
                Xcalibra cryptocurrency exchange. We recruit and curate the best
                blockchain software and <br />
                development talent to support the companies in our ethos and
                their long-term growth.
              </p>
            </div>
          </div>

          <div className="box row mt-4">
            <div className="col offset-md-1 offset-xl-3 mt-5">
              <img src={pic32} alt="" />
              <h2>OUR COMPANIES</h2>
              <p>
                Safex is a privacy blockchain and Safex Market is an open-source
                <br />
                decentralized marketplace platform using the Safex e-commerce
                protocol.
              </p>
              <p>
                Xcalibra is a high-performance crypto exchange and fully
                compliant platform where <br />
                you can buy and trade Safex, Bitcoins, Ethereum and other
                cryptocurrencies.
              </p>
            </div>
          </div>

          <div className="box row mt-4">
            <div className="col offset-md-1 offset-xl-3 mt-5">
              <img src={pic33} alt="" />
              <h2>Talent Acquisition Network</h2>
              <p id="p2">
                Photon Atlas is searching for high quality candidates interested
                in an opportunity to lead
                <br />
                in defining the approach and architecture of the technology that
                will change the world.
                <br />
                Candidates will collaborate in a local Denver office alongside
                the passionate <br />
                visionaries leading these efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
