import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import Img from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <NavLogo to="/">Logo</NavLogo>
        <Bars /> */}
        {/* <h3 style={{ marginLeft: "7%", fontSize: "38px", color: " #00CC00" }}>
          treedefi
        </h3> */}

        <img
          src={Img}
          alt="pic"
          style={{
            // backgroundColor: "#34b66b",
            width: "30%",
            height: "30%",
            // marginTop: "10%",
          }}
        />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/nftree" activeStyle>
            NFTree
          </NavLink>
          <NavLink to="/carbonCredits" activeStyle>
            Carbon Credits
          </NavLink>
          <NavLink to="/intiatives" activeStyle>
            Initiatives
          </NavLink>
          <NavLink to="/intiatives" activeStyle>
            Security
          </NavLink>
          <NavLink to="/intiatives" activeStyle>
            Institution
          </NavLink>
          <NavLink to="/intiatives" activeStyle>
            Contact Us
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/whitepaper">WHITEPAPER</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/launchapp">LAUNCH APP</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
