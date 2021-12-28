import React from "react";
import "./FeatureStyles.css";
import svg1 from "../../assets/feache1.svg";
import svg2 from "../../assets/feache02.svg";
import svg3 from "../../assets/feache03.svg";
import svg4 from "../../assets/feache04.svg";
import svg5 from "../../assets/feache05.svg";
import svg6 from "../../assets/feache06.svg";
import svg7 from "../../assets/feache07.svg";
import svg8 from "../../assets/feache08.svg";
import Img from "../../assets/treedefi-app.png";
import Img1 from "../../assets/gplay.png";
import Img2 from "../../assets/appstr.png";
import press1 from "../../assets/press1.png";
import press2 from "../../assets/press2.png";
import press3 from "../../assets/press3.png";
import press4 from "../../assets/press4.png";
import press5 from "../../assets/press5.png";
import press6 from "../../assets/press6.png";
import imgg from "../../assets/ftr_bg.png";
import twitter from "../../assets/twitter.jpeg";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";

function Features() {
  return (
    <div class="cont1">
      <h2 class="feature"> TreeDefi Features</h2>
      <p class="feDetail">
        We've created a set of killer features through our several months of
        research for the TreeDefi project. They create our full ecosystem and
        strive to implement the blockchain into real world environmental
        applications.
      </p>

      <div class="feaWrapper" data-aos={"fade-right"}>
        <div class="featureCard">
          <div class="fee1">
            <img src={svg1} width="70%" height="80" />
          </div>
          <h2 class="title">Locked Liquidity</h2>
        </div>

        <div class="featureCard">
          <div class="fee1">
            <img src={svg2} width="70%" height="80" />
          </div>
          <h2 class="title">Harvest Guard</h2>
        </div>

        <div class="featureCard">
          <div class="fee1">
            <img src={svg3} width="70%" height="80" />
          </div>
          <h2 class="title">Carbon Credits</h2>
        </div>

        <div class="featureCard">
          <div class="fee1">
            <img src={svg4} width="70%" height="80" />
          </div>
          <h2 class="title">Deflationary Token</h2>
        </div>
      </div>

      <div class="feaWrapper" data-aos={"fade-right"}>
        <div class="featureCard">
          <div class="fee1">
            <img src={svg5} width="70%" height="80" />
          </div>
          <h2 class="title">Various Audits</h2>
        </div>

        <div class="featureCard">
          <div class="fee1">
            <img src={svg6} width="70%" height="80" />
          </div>
          <h2 class="title">Crypto Games</h2>
        </div>

        <div class="featureCard">
          <div class="fee1">
            <img src={svg7} width="70%" height="80" />
          </div>
          <h2 class="title">Triple Burn System</h2>
        </div>

        <div class="featureCard">
          <div class="fee1">
            <img src={svg8} width="70%" height="80" />
          </div>
          <h2 class="title">Planting Real Trees</h2>
        </div>
      </div>

      <div style={{ flexDirection: "row", display: "flex", marginTop: "4%" }}>
        <div style={{ marginLeft: "10%" }}>
          <img src={Img} />
        </div>

        <div
          data-aos={"fade-up"}
          style={{ display: "flex", flexDirection: "column", margin: "5% 15%" }}
        >
          <h2 class="comingsoon">Coming Soon</h2>
          <p class="feDetail">
            We have recently started development on a new wallet tracking app
            for TreeDefi, that way investors can check their assets and farms
            easily while on the go.
          </p>

          <div
            style={{ flexDirection: "row", display: "flex", marginTop: "4%" }}
          >
            <div class="Gpay">
              <img src={Img1} />
            </div>

            <div class="Gpay">
              <img src={Img2} />
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos={"fade-down"}
        style={{
          marginTop: "4%",
        }}
      >
        <h2 class="assoonas">As Seen On</h2>
        <p class="variousDetail">
          The various platforms and publications where you might've heard about
          our project.
        </p>

        <div
          data-aos={"fade-up"}
          style={{ display: "flex", flexDirection: "column", marginTop: "5%" }}
        >
          <div
            style={{ display: "flex", flexDirection: "row", marginLeft: "9%" }}
          >
            <div class="cardd">
              <img src={press1} width="100%" height="120%" />
            </div>

            <div class="cardd">
              <img src={press2} />
            </div>

            <div class="cardd">
              <img src={press3} />
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "row", marginLeft: "9%" }}
          >
            <div class="cardd">
              <img src={press4} width="100%" height="100%" />
            </div>

            <div class="cardd">
              <img src={press5} width="100%" height="100%" />
            </div>

            <div class="cardd" style={{ marginRight: "20%" }}>
              <img src={press6} width="80%" height="50%" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "5%",
          backgroundImage: `url(${imgg})`,
          backgroundSize: "cover",

          // height: "100%",
          padding: "7px",
          display: "flex",
          flexDirection: "column",
          // width: "100%",
          // height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            marginTop: "9%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div class="social">
            <img src={twitter} width="15%" height="70%" />
          </div>
          <div class="social">
            <img src={youtube} width="15%" height="70%" />
          </div>
          <div class="social">
            <img src={instagram} width="10%" height="10%" />
          </div> */}
        </div>
        <h2 class="footer">© 2021 Tree DeFi. All Rights Reserved.</h2>
      </div>
    </div>
  );
}

export default Features;
