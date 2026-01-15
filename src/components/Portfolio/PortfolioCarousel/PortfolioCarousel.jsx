import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import {
  StyledCard,
  StyledCardDescription,
  StyledOverlay,
  StyledImage,
  StyledLink,
} from "./styles";
import { projects } from "./data";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/autoplay/autoplay.scss"; // Autoplay module
import "swiper/modules/effect-coverflow/effect-coverflow.scss"; // Coverflow module

const PortfolioCarousel = () => {
  const [display, setDisplay] = useState({ display: "none" });
  const [expandedId, setExpandedId] = useState(null);

  const normalizeUrl = (url) =>
    url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, EffectCoverflow]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
      }}
      spaceBetween={60}
      slidesPerView={1.3}
      // autoplay={{"delay": 2500, "disableOnInteraction": false}}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      slideToClickedSlide={true}
      scrollbar={{ draggable: true }}
      breakpoints={{
        700: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 2.8,
          spaceBetween: 60,
          touchRatio: 0,
          scrollbar: {
            draggable: false,
          },
        },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          {({ isActive }) => (
            <StyledCard active={isActive}>
              <StyledImage
                onMouseEnter={(e) => {
                  setDisplay({ display: "flex" });
                }}
                onMouseLeave={(e) => {
                  setDisplay({ display: "none" });
                }}
              >
                <img src={project.img} alt={project.title} />
                {isActive ? (
                  <StyledLink style={display}>
                    <Link
                      to={normalizeUrl(project.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 36C35.046 36 44 24 44 24C44 24 35.046 12 24 12C12.954 12 4 24 4 24C4 24 12.954 36 24 36Z"
                          stroke="white"
                          strokeWidth="4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24 29C25.3261 29 26.5979 28.4732 27.5355 27.5355C28.4732 26.5979 29 25.3261 29 24C29 22.6739 28.4732 21.4021 27.5355 20.4645C26.5979 19.5268 25.3261 19 24 19C22.6739 19 21.4021 19.5268 20.4645 20.4645C19.5268 21.4021 19 22.6739 19 24C19 25.3261 19.5268 26.5979 20.4645 27.5355C21.4021 28.4732 22.6739 29 24 29Z"
                          stroke="white"
                          strokeWidth="4"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </StyledLink>
                ) : null}
              </StyledImage>
              {isActive ? null : <StyledOverlay />}
              {isActive ? (
                <StyledCardDescription>
                  <h3>{project.title}</h3>
                  <p>
                    {expandedId === project.id
                      ? project.description
                      : project.description.slice(0, 120)}
                    {project.description.length > 120 && (
                      <button
                        onClick={() =>
                          setExpandedId(
                            expandedId === project.id ? null : project.id
                          )
                        }
                        style={{
                          marginLeft: "6px",
                          background: "none",
                          border: "none",
                          color: "#2563eb",
                          cursor: "pointer",
                          fontWeight: 500,
                        }}
                      >
                        {expandedId === project.id ? "Read less" : "Read more"}
                      </button>
                    )}
                  </p>
                  <p
                    style={{
                      marginTop: "20px",
                      fontSize: "16px",
                      flexWrap: "wrap",
                      fontWeight: "500",
                    }}
                  >
                    Stack
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      marginTop: "15px",
                      marginBottom:"20px",
                      fontSize: "16px",
                      flexWrap: "wrap",
                      color: "purple",
                    }}
                  >
                    {project.stack?.map((tech) => (
                      <p
                        key={tech}
                        style={{
                          margin: 0,
                          padding: "4px 8px",
                          background: "#f1f1f1",
                          borderRadius: "10px",
                          fontWeight: "300",
                        }}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </StyledCardDescription>
              ) : null}
            </StyledCard>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioCarousel;
