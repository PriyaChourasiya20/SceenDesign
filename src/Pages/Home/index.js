import React from "react";
import "./Style.css";
import Img from "../../assets/home.png";
import blck_tree from "../../assets/blck_tree.png";
import magnetocapital from "../../assets/magnetocapital.png";
import coinbase from "../../assets/coinbase.png";
import coinmarketcap from "../../assets/coinmarketcap.png";
import coingecko from "../../assets/coingecko.png";
import delta from "../../assets/delta.png";
import dapp from "../../assets/dapp.png";
import "./Content.js";
import Content from "./Content.js";
import Treedefi from "./Treedefi.js";
import Features from "./Features.js";
import AOS from "aos";
import "aos/dist/aos.css";

function index() {
  // AOS.init();
  return (
    <div class="curved-div">
      <div class="container">
        <div class="text">
          <p class="head" data-aos={"fade-down"}>
            The First <br />
            Eco Friednly <br />
            Defi Project.
          </p>
        </div>

        <div class="img">
          <img
            src={Img}
            data-aos="fade-up"
            alt="pic"
            style={{
              backgroundColor: "#34b66b",
              width: "100%",
              height: "100%",
              // marginTop: "10%",
            }}
          />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#34b66b"
          fill-opacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,106.7C480,128,600,192,720,229.3C840,267,960,277,1080,250.7C1200,224,1320,160,1380,128L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div class="tpt" data-aos="fade-left">
        {/* <div class="tptcontent"></div> */}
        <h3 class="tpth1"> Total Planted Trees(TPT)</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={blck_tree}
            alt="pic"
            width="70px"
            height="70px"
            style={{ marginTop: "1%" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "1%",
            }}
          >
            <h1 style={{ color: "#000", fontSize: "50px" }}>689010</h1>
            <h3 style={{ color: "#34b66b", marginTop: "-8%" }}>
              kg of CO2 Absorbed every year
            </h3>
          </div>
        </div>
        <div>
          <button class="btn1">Whitepaper</button>
          <button class="btn1">Donations</button>
        </div>
      </div>

      <div class="box">
        <h3 class="hed1">Capital Partner:</h3>
        <div class="cntnt" data-aos={"fade-up"}>
          <img src={magnetocapital} width="80%" height="100" />
        </div>
        <h3 class="hed1">Listed On:</h3>

        <div class="cardContainer" data-aos={"fade-up"}>
          <div class="cntnt1" style={{ marginLeft: "20%" }}>
            <img class="image" src={coinbase} />
          </div>
          <div class="cntnt1">
            <img src={coinmarketcap} class="image" />
          </div>
          <div class="cntnt1">
            <img src={coingecko} class="image" />
          </div>
        </div>

        <div class="cardContainer" data-aos={"fade-up"}>
          <div class="cntnt1" style={{ marginLeft: "30%", marginTop: "4%" }}>
            <img src={dapp} class="image" />
          </div>
          <div class="cntnt1" style={{ marginLeft: "10%", marginTop: "4%" }}>
            <img src={delta} class="image" />
          </div>
        </div>

        <Content />
        <Treedefi />
        <Features />
      </div>
    </div>
  );
}

export default index;
