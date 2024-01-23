import styled, { keyframes } from "styled-components";
import bgImg from "../assets/background-img.png";

const Section = styled.section`
  height: 200vh;
  background: linear-gradient(
    180deg,
    #0e1322 0%,
    #0a0f1b 31.73%,
    #060a13 57.86%,
    #000 100%
  );
`;

const BackgroundImgDiv = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 0;
`;

const BackgroundImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const grow = keyframes`
    to {
        scale: 2.5;
        opacity: 0;
    }
`;

const HeroDiv = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 12rem;
  color: #fff;
  position: absolute;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${grow} linear forwards;
  animation-timeline: scroll();
`;

const CTADiv = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 12rem;
  color: #fff;
`;

export default function Landing() {
  return (
    <Section>
      <BackgroundImgDiv>
        <BackgroundImg src={bgImg} />
      </BackgroundImgDiv>
      <HeroDiv>PLACEHOLDER</HeroDiv>
      <CTADiv>ESSENTIALS BEYOND REACH?</CTADiv>
    </Section>
  );
}
