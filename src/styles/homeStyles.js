import styled from "styled-components";

//Banner
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;

export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
  @media(max-width:850px){
    display:none;
  }
`;

export const BannerTitle = styled.h1`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
`;

export const Headline = styled.span`
  display: block;
  font-size: 35vh;
  font-weight: 900;
  line-height: 0.76;
  @media (max-width: 840px) {
    font-size:10vh;
    margin:5%;
  }
`;

//Content Section
export const HomeContentSection = styled.div`
  margin-bottom: 200px;
`;

export const Content = styled.h2`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
  @media(max-width:840px){
  width:80%;
  margin:2%;
}
`;

//Featured Section
export const HomeFeaturedSection = styled.div`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;

export const FeaturedContent = styled.div`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
  @media (max-width: 1200px) {
    padding:0;

    .featured-title {
      font-size:4rem;
    }
  }
`;

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
`;

export const FooterContent = styled.div`
  color: ${(props) => props.theme.text};

  .footer-title {
    font-size: 10vh;
    text-align: right;
    font-weight: 900;
  }

  .footer-email {
    margin-top: 10%;
    font-size: 8vh;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: underline #2323fa;
  }

  @media (max-width: 1200px) {
    .footer-email {
      margin-top: 20%;
      font-size: 5vw;
    }

    .footer-title {
      font-size:8vh;
    }
  }
`;
