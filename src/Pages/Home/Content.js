import React from "react";
import "./ContentStyles.css";
import sc from "../../assets/sc.svg";
import sc2 from "../../assets/sc2.svg";
import sc3 from "../../assets/sc3.svg";
import sc4 from "../../assets/sc4.svg";
import sc5 from "../../assets/sc5.svg";

function Content() {
  return (
    <div class="headContainer">
      <h2 class="heading1">Real world Applications</h2>
      <p class="description">
        Our ecosystem allows investors to have a real world impact, and offers
        the opportunity to offset their CO2 footprint.
      </p>

      <div class="cardWrapper" data-aos={"fade-up"}>
        <div class="card">
          <div class="icbox">
            <img src={sc} width="50" height="60%" alt="pic" />
          </div>
          <h2 class="hed2">NFTs backed by Real Trees</h2>
          <p class="cardText">
            We implemented state of the art NFTs which are linked to a real
            planted trees around the world.
          </p>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "18%" }}
          >
            <h4 class="learnMore">Learn More</h4>
            <span class="span">
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

        <div class="card">
          <div class="icbox">
            <img src={sc2} width="50" height="60%" />
          </div>

          <h2 class="hed2">Deflationary Yield Farming Tokenomics</h2>
          <p class="cardText">
            Our tokenomics are based on low supply and deflationary principles,
            allowing our tokens to be safe from price inflation.
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h4 class="learnMore">Learn More</h4>
            <span class="span">
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

        <div class="card">
          <div class="icbox">
            <img src={sc3} width="50" height="60%" />
          </div>
          <h2 class="hed2">Brand New CO₂ Tokens</h2>
          <p class="cardText">
            With our techonology, our users can trace how much CO₂ their trees
            are absorbing and they receive CO₂ tokens in return.
          </p>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "15%" }}
          >
            <h4 class="learnMore">Learn More</h4>
            <span class="span">
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

      <div class="cardWrapper" data-aos={"fade-up"}>
        <div class="card" style={{ marginLeft: "24%" }}>
          <div class="icbox">
            <img src={sc4} width="50" height="60%" />
          </div>
          <h2 class="hed2">Carbon Credit Certificates</h2>
          <p class="cardText">
            Users can decide to get trustless certificates verified through the
            Blockchain.
          </p>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "26%" }}
          >
            <h4 class="learnMore">Learn More</h4>
            <span class="span">
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

        <div class="card" style={{ marginLeft: "6%" }}>
          <div class="icbox">
            <img src={sc5} width="50" height="60%" />
          </div>
          <h2 class="hed2">Funding Opportunities</h2>
          <p class="cardText">
            Our project is giving life to new environmentally friendly activites
            around the world.
          </p>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "18%" }}
          >
            <h4 class="learnMore">Learn More</h4>
            <span class="span">
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
    </div>
  );
}

export default Content;
