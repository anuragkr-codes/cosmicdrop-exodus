import styled, { keyframes } from "styled-components";
import bgImg from "../assets/background-img.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import React from "react";

const Section = styled.section`
  height: 300vh;
  width: 100vw;
  /* width: 100%; */
  background: linear-gradient(
    180deg,
    #0e1322 0%,
    #0a0f1b 31.73%,
    #060a13 57.86%,
    #000 100%
  );
  /* overflow-x: hidden; */
`;

const BackgroundImgDiv = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
`;

const BackgroundImg = styled.img`
  height: 40vh;
  width: 100%;
  object-fit: cover;
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
  /* width: 100%; */
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;

  animation: ${grow} ease-in forwards;
  animation-timeline: view(0 100vh);
`;

const bgAnimation = keyframes`
    to{
        background-position: right;
    }
`;

const HeroTextDiv = styled.div`
  margin-top: 26vh;

  font-size: clamp(4.6rem, 10vw, 16rem);
  letter-spacing: -0.1vw;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;

  /* background: linear-gradient(
    151deg,
    rgba(255, 221, 170, 0.9697128851540616) 27%,
    rgba(167, 255, 241, 0.9753151260504201) 50%,
    rgba(255, 155, 244, 0.9220938375350141) 75%
  ); */
  /* background: linear-gradient(
    151deg,
    rgba(4, 253, 238, 0.8408613445378151) 27%,
    rgba(84, 131, 215, 0.8576680672268908) 50%,
    rgba(138, 49, 200, 0.8716736694677871) 75%
  ); */
  /* background: linear-gradient(
    151deg,
    rgba(255, 173, 49, 1) 27%,
    rgba(238, 70, 211, 1) 50%,
    rgba(144, 124, 255, 1) 75%
  ); */
  background: linear-gradient(
    151deg,
    rgba(255, 173, 49, 0.8156512605042017) 27%,
    rgba(238, 70, 211, 0.9136904761904762) 50%,
    rgba(144, 124, 255, 0.9557072829131653) 75%
  );
  background-clip: text;
  color: transparent;
  background-size: 300%;
  animation: ${bgAnimation} 6s infinite alternate;
`;

const show = keyframes`
    to{
        opacity: 1;
    }
`;

const CTADiv = styled.div`
  height: 100vh;
  width: 100vw;
  /* width: 100%; */

  display: flex;
  margin-left: 1rem;

  position: sticky;
  top: 0;
  opacity: 0;

  animation: ${show} ease-in forwards;
  animation-timeline: view(50vh 0);
`;

const CTATextDiv = styled.div`
  margin-top: 20vh;

  font-size: clamp(3.4rem, 12vw, 14rem);
  letter-spacing: -0.1vw;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
`;

const ButtonDiv = styled.div`
  height: 100vh;
  position: relative;
  margin-left: 1rem;
`;

const ButtonBox = styled.div`
  display: inline-block;
`;

const CTAButton = styled.div`
  position: absolute;
  top: 58vh;
  left: 62vw;
  transform: translate(-50%, -50%);

  color: #fff;
  background-color: #060a12;
  font-size: clamp(2rem, 2.6vw, 3.6rem);

  border: 3px solid #ffad31;
  border-radius: 3rem;
  padding: 1rem 1.4rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  a:link,
  a:visited {
    color: inherit;
    white-space: nowrap;
    text-decoration: none;
  }

  transition: background-color 0.2s;

  cursor: pointer;
  &:hover {
    background-color: #ffad31;
    color: #080c16;
  }

  @media (max-width: 67.5em) {
    top: 54vh;
  }

  @media (max-width: 57.5em) {
    top: 48vh;
  }

  @media (max-width: 45em) {
    top: 44vh;
  }

  @media (max-width: 41.25em) {
    font-size: 2rem;
    top: 38vh;
  }

  @media (max-width: 34.3em) {
    font-size: 1.8rem;
    top: 34vh;
  }
`;

export default function Landing() {
  return (
    <Section>
      <BackgroundImgDiv>
        <BackgroundImg src={bgImg} />
        {Array.from({ length: 7 }).map((_, index) => (
          <React.Fragment key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="44"
              viewBox="0 0 30 44"
              fill="none"
              className={`svg svg-pin${index + 1}`}
            >
              <path
                d="M14.9999 0C6.7158 0 0 6.83643 0 15.2699C0 16.7191 0.20266 18.1193 0.573199 19.4477C0.801353 20.2655 1.05089 21.0778 1.44478 21.8121C4.5207 27.5449 14.9998 44 14.9998 44C14.9998 44 25.4795 27.5446 28.5552 21.8117C28.9493 21.0776 29.1985 20.2654 29.4267 19.4477C29.797 18.1193 30 16.7191 30 15.2699C30 6.83643 23.2842 0 14.9999 0ZM14.9999 21.9934C12.908 21.9934 11.0415 20.9972 9.83037 19.4477C8.93306 18.2995 8.39482 16.8477 8.39482 15.2699C8.39482 11.5623 11.3578 8.54612 14.9999 8.54612C18.6421 8.54612 21.6047 11.5623 21.6047 15.2699C21.6047 16.8477 21.0667 18.2995 20.1694 19.4477C18.9582 20.9972 17.0919 21.9934 14.9999 21.9934Z"
                fill="#FFAD31"
              />
            </svg>
          </React.Fragment>
        ))}
      </BackgroundImgDiv>
      <HeroDiv>
        <HeroTextDiv>Cosmicdrop</HeroTextDiv>
      </HeroDiv>
      <CTADiv>
        <CTATextDiv>
          <div>Essentials</div>
          <div>beyond reach?</div>
        </CTATextDiv>
      </CTADiv>
      <ButtonDiv>
        <ButtonBox>
          <CTAButton>
            <a href="#products">Not anymore</a> <MdOutlineArrowOutward />
          </CTAButton>
        </ButtonBox>
      </ButtonDiv>
    </Section>
  );
}
