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
        <StyledNav>
          <Link to="/" style={{ color: nav1Color }} onClick={rotateLeft}>
            about me
          </Link>
          <Link
            to="resources"
            style={{ color: nav2Color }}
            onClick={rotateRight}
          >
            resources
          </Link>
          <Link
            to="portfolio"
            style={{ color: nav3Color }}
            onClick={rotateDown}
          >
            portfolio
          </Link>
          <StyledWheel
            as={motion.div}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6 }}
            style={{ border: `2px solid ${wheelBorderColor}` }}
          >
            <StyledPointer
              style={{ background: `${pointerColor}` }}
            ></StyledPointer>
            <img src={switchImage} alt="user" />
          </StyledWheel>
        </StyledNav>
      </StyledDiv>
      <StyledNavTrigger onClick={handleClick} />
    </StyledWrapper>
  );
};

export default Nav;
