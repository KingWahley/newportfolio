import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  StyledWrapper,
  StyledFooter,
  StyledSocialIcons,
  StyledIcon,
  StyledCopyrightText,
} from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <Container>
        <StyledFooter>
          <div>
            {/* <button>hire me</button> */}
            <StyledSocialIcons>
              <StyledIcon>
                <Link to="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </Link>
              </StyledIcon>

              <StyledIcon>
                <Link to="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </StyledIcon>

              <StyledIcon>
                <Link to="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </StyledIcon>
            </StyledSocialIcons>
            <StyledCopyrightText>
              copyright &copy; {currentYear} Peter Olawale{" "}
            </StyledCopyrightText>
          </div>
        </StyledFooter>
      </Container>
    </StyledWrapper>
  );
};

export default Footer;
