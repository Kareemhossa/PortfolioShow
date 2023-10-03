import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <Nav>
      <h1>
        <Link id="logo" to="/">
          portofolio
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <LineAnim
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/work">Our Work </Link>
          <LineAnim
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "60%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/contactus">Contact Us </Link>
          <LineAnim
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contactus" ? "60%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
      </ul>
    </Nav>
  );
};

//Styled componants

const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  background-color: #282828;
  transition: background-color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 100;
  a {
    color: white;
  }
  ul {
    display: flex;
  }
  li {
    padding-left: 8rem;
    position: relative;
    cursor: pointer;
    /* font-weight: normal; */
  }
  #logo {
    font-size: 3rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    /* padding: 2rem 0rem; */
    ul {
      padding: 2rem 0rem;
      justify-content: space-between;
      width: 100%;
    }
    li {
      padding-left: 0rem;
    }
    #logo {
      margin-bottom: 2rem;
    }
  }
`;
const LineAnim = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 900px) {
    left: 25%;
  }
`;

export default NavBar;
