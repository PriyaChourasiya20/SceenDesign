// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #34b68a;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   padding: 0.2rem calc((100vw - 1000px) / 2);
  //   z-index: 3;
  position: fixed;
  width: 100%;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 23px;
  cursor: pointer;
  //   margin-right: 30px;
  &.active {
    color: #fff;
  }
  &:hover {
    color: #006600;
  }
`;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5%;
  padding-top: 2px;
  //   margin-left: 10px;
  //   @media screen and (max-width: 768px) {
  //     display: none;
  //   }
  margin-left: -10%;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 20px;
  //   height: 60px;
  //   @media screen and (max-width: 768px) {
  //     display: none;
  //   }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  background: transparent;
  padding: 12px 22px;
  color: #34b68a;
  outline: none;
  height: 20px;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  background: #fff;
  back- &:hover {
    // transition: all 0.2s ease-in-out;
    // background: #006600;
    // color: #808080;
  }
  &:hover {
    color: #fff;
    background: #006600;
    border-color: #34b68a;
  }
`;
