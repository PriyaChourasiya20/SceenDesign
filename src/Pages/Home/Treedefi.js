import React from "react";
import Img from "../../assets/hmsc.png";
import "./TreedefiStyles.css";
import Img2 from "../../assets/environment.png";
import Img3 from "../../assets/longrun.png";
import Imgs from "../../assets/hmsc03.png";

function Treedefi() {
  return (
    <div class="container1">
      <img src={Img} width="100%" />
      <div
        style={{
          background: "#EBF8F4",
          marginTop: "-3px",
          paddingBottom: "4%",
        }}
      >
        <h2 class="why1" data-aos={"fade-down"}>
          Why TreeDefi?
        </h2>
        <p class="p1" data-aos={"fade-down"}>
          What differentiates us from the other competitors on the Blockchain?
        </p>

        <div class="divWrapper" data-aos={"fade-up"}>
          <div style={{ flex: 1 }}>
            <img src={Img2} height="100%" style={{ marginLeft: "16%" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <h2 class="FighText">Fighting Cryptocurrency Carbon Footprint</h2>
            <p class="des1">
              We use 1/3 of our deposit fees to plant real trees around the
              world. This is done through our favourite planting organizations
              and more recently through our planting projects around the world,
              hosted by our community ambassadors.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2%",
              }}
            >
              <h4 class="learnMore">Learn More</h4>
              <span class="span1">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  data-testid="ArrowForwardIcon"
                >
                  <path
                    fill="#34b66b"
                    d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div class="divWrapper1" data-aos={"fade-down"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              //   marginTop: "0px",
            }}
          >
            <h2 class="text2">We’re Here For The Long Run!</h2>
            <p class="detail2">
              We've locked the dev funds and initial liquidity of the project to
              ensure our user's trust while operating on TreeDefi.
            </p>

            <p class="detail2">
              We are also working on Harvest Guard, a feature that will protect
              TREE and SEED from market manipulation created by whales.
            </p>

            <div style={{ flexDirection: "row", display: "flex" }}>
              <div class="button">
                <span>Liquidity Locked</span>
              </div>

              <div class="button">
                <span>Audited by Certik</span>
              </div>
            </div>

            <div style={{ flexDirection: "row", display: "flex" }}>
              <div class="button" style={{ width: "30%" }}>
                <span>Migration Code Removed</span>
              </div>

              <div class="button">
                <span>Anti Flash Loan</span>
              </div>
            </div>

            <div
              style={{ flexDirection: "row", display: "flex", marginTop: "4%" }}
            >
              <h4 class="learnMore">Initial Liquidity Locked</h4>
              <span class="span1">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  data-testid="ArrowForwardIcon"
                >
                  <path
                    fill="#34b66b"
                    d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </span>
              <h4 class="learnMore" style={{ marginLeft: "4%" }}>
                Dev Funds Locked
              </h4>
              <span class="span1">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  data-testid="ArrowForwardIcon"
                >
                  <path
                    fill="#34b66b"
                    d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>

          <div style={{ marginRight: "4%" }}>
            <img src={Img3} />
          </div>
        </div>
      </div>
      <img src={Imgs} width="100%" />
    </div>
  );
}

export default Treedefi;
