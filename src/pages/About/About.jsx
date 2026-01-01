import Container from "../../components/Container/Container";
import { HeartIcon } from "@heroicons/react/solid";
import { UploadIcon } from "@heroicons/react/outline";
import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import {
  StyledWrapper,
  StyledSection,
  StyledMainSection,
  StyledSidebar,
  StyledIntro,
  StyledSkillsSection,
  StyledSkills,
  StyledSkill,
  StyledServices,
  StyledOtherServices,
  StyledActions,
  StyledIcon,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <AnimatedPage>
      <StyledWrapper>
        <Container>
          <StyledSection>
            <StyledMainSection>
              <StyledIntro>
                <h4>Introduction</h4>
                <p>
                  Hello, my name is <span>Peter Olawale.</span>
                  <br />I help businesses turn ideas into fast, beautiful web
                  and mobile applications. By combining clean frontend
                  engineering with strong problem-solving, I create digital
                  experiences that are reliable, scalable, and built to convert
                  users into customers.
                </p>
              </StyledIntro>

              <StyledSkillsSection>
                <h4>Skills</h4>
                <StyledSkills>
                  <div>
                    <StyledSkill>
                      <h5>Web Development</h5>
                      <p>
                        I build fast, responsive, and user-friendly websites
                        using modern HTML, CSS, and JavaScript. My focus is on
                        clean structure, smooth interactions, and high
                        performance delivering reliable, scalable code that’s
                        easy to maintain and built to grow with your business.
                      </p>
                    </StyledSkill>
                  </div>
                  <div>
                    <StyledSkill>
                      <h5>AI Integration</h5>
                      <p>
                        Integrating AI-powered features into web and mobile
                        interfaces, including API-based AI tools, intelligent UI
                        interactions, and data-driven components that enhance
                        user experience and product value.
                      </p>
                    </StyledSkill>
                    {/* <StyledSkill>
                      <h5>Project Planning</h5>
                      <p>
                        Turning ideas into clear plans by outlining features,
                        user flows, and technical structure before development
                        begins.
                      </p>
                    </StyledSkill> */}
                  </div>
                  <div>
                    <StyledSkill>
                      <h5>My Stack</h5>
                      {/* <p>
                        <FontAwesomeIcon icon={faHtml5} /> HTML •{" "}
                        <FontAwesomeIcon icon={faCss3Alt} /> CSS • TailwindCSS •{" "}
        
                        <FontAwesomeIcon icon={faJs} /> JavaScript •{" "}
                        <FontAwesomeIcon icon={faReact} /> React.js • Next.js
                      </p> */}
                      <p>
                        HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js
                      </p>
                    </StyledSkill>
                    <StyledSkill>
                      <h5>Communication</h5>
                      <p>Fluent in English, Pidgin english and Yoruba</p>
                    </StyledSkill>
                  </div>
                </StyledSkills>
              </StyledSkillsSection>
            </StyledMainSection>
            <StyledSidebar>
              <StyledServices>
                <h4>My Services</h4>
                <ul>
                  <li>Website Development</li>
                  <li>Web App Development</li>
                  <li>Mobile Applications</li>
                  <li>Figma to Code</li>
                  <li>Technical Consulting & Support</li>
                </ul>
              </StyledServices>

              <StyledOtherServices>
                <h4>non coding services</h4>
                <ul>
                  <li>UI/UX Consultation</li>
                  <li>Writing</li>
                </ul>
              </StyledOtherServices>

              <StyledActions>
                <div>
                  <StyledIcon>
                    <HeartIcon style={{ fill: "#EFDA6D" }} />
                  </StyledIcon>
                  <span>download</span>
                </div>

                <div>
                  <StyledIcon>
                    <UploadIcon style={{ stroke: "#EFDA6D" }} />
                  </StyledIcon>
                  <span>share</span>
                </div>
              </StyledActions>
            </StyledSidebar>
          </StyledSection>
        </Container>
      </StyledWrapper>
    </AnimatedPage>
  );
};

export default About;
