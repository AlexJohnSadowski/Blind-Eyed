
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  FooterContent
} from "../../styles/homeStyles"

const HomeFeatured = () => {


  return (
    <HomeFeaturedSection>
      <Container>
        <Link to="/">
          <FeaturedContent>
            <Flex spaceBetween>
              <h3>Featured Project</h3>
              <div>
                <h4>Rhythm of the life</h4>
                <h4>2020</h4>
              </div>
            </Flex>
            <h2 className="featured-title">
              LOOK <br /> INSIDE
              <span className="arrow">
                <svg>
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              muted
              src={require("../../assets/video/featured-video.mp4")}
            ></video>
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
          <FooterContent>
            <div className="footer-title"> WANNA SEE MORE?<br></br><br></br> CONTACT ME.</div>
            <div className="footer-email">alexsadowski.dev@gmail.com</div>
          </FooterContent>
         
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured

