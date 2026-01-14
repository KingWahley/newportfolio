import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import {
  StyledWrapper,
  StyledDiv,
  StyledLogo,
  StyledNav,
  StyledWheel,
  StyledPointer,
  StyledNavTrigger,
  StyledHamburger,
} from "./styles";

import logo from "../../assets/icons/logo.png";
import avatar from "../../assets/images/avatar.png";
import portfolioImg from "../../assets/images/portfolio.png";
import resourcesImg from "../../assets/images/resources.jpg";

const Nav = () => {
  const white = "#FFFFFF";
  const green = "#4ABC55";
  const purple = "#816BFF";
  const red = "#DE0F0F";

  const [rotation, setRotation] = useState(0);
  const [nav1Color, setNav1color] = useState(green);
  const [nav2Color, setNav2Color] = useState("");
  const [nav3Color, setNav3Color] = useState("");
  const [pointerColor, setPointerColor] = useState(green);
  const [wheelBorderColor, setWheelBorderColor] = useState();
  const [switchImage, setSwitchImage] = useState(avatar);
  const [showNavWheel, setShowNavWheel] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  const rotateLeft = () => {
    setRotation(0);
    setNav1color(green);
    setNav2Color(white);
    setNav3Color(white);
    setPointerColor(green);
    setWheelBorderColor(green);
    setSwitchImage(avatar);
  };

  const rotateRight = () => {
    setRotation(-180);
    setNav2Color(purple);
    setNav3Color(white);
    setNav1color(white);
    setPointerColor(purple);
    setWheelBorderColor(purple);
    setSwitchImage(resourcesImg);
  };

  const rotateDown = () => {
    setRotation(-90);
    setNav2Color(white);
    setNav3Color(red);
    setNav1color(white);
    setPointerColor(red);
    setWheelBorderColor(red);
    setSwitchImage(portfolioImg);
  };

  const location = useLocation();

  const handleClick = () => {
    setShowNavWheel(true);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        rotateLeft();
        break;
      case "/portfolio":
        rotateDown();
        break;
      case "/resources":
        rotateRight();
        break;
      default:
        console.log("ooppss!");
    }
  }, [location]);

  return (
    <StyledWrapper>
      <StyledDiv showNavWheel={showNavWheel}>
        <h3>PETER OLAWALE</h3>

        <StyledHamburger onClick={toggleNav} aria-label="Toggle menu">
          <motion.svg
            viewBox="0 0 24 24"
            initial={false}
            animate={navOpen ? "open" : "closed"}
          >
            <motion.line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: 45, translateY: 6 },
              }}
            />
            <motion.line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: -45, translateY: -6 },
              }}
            />
          </motion.svg>
        </StyledHamburger>

        <StyledNav open={navOpen}>
          <Link
            to="/"
            style={{ color: nav1Color }}
            onClick={() => {
              rotateLeft();
              setNavOpen(false);
            }}
          >
            About me
          </Link>
          
          <Link
            to="portfolio"
            style={{ color: nav3Color }}
            onClick={() => {
              rotateDown();
              setNavOpen(false);
            }}
          >
            Portfolio
          </Link>

          <Link
            to="resources"
            style={{ color: nav2Color }}
            onClick={() => {
              rotateRight();
              setNavOpen(false);
            }}
          >
            Resources
          </Link>


          {/* <StyledWheel
            as={motion.div}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6 }}
            style={{ border: `2px solid ${wheelBorderColor}` }}
          >
            <StyledPointer style={{ background: `${pointerColor}` }} />
            <img src={switchImage} alt="user" />
          </StyledWheel> */}
        </StyledNav>
      </StyledDiv>

      <StyledNavTrigger onClick={handleClick} />
    </StyledWrapper>
  );
};

export default Nav;
