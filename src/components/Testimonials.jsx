import styled, { keyframes } from "styled-components";
import QuoteIcon from "../assets/QuoteIcon.svg";
import { useEffect, useRef } from "react";

const Section = styled.section`
  /* width: 100vw; */
  background: #030509;
  padding: 18rem 2rem;
`;

const Div = styled.div`
  max-width: 140rem;
  margin: auto;
  height: 100%;
  background-color: inherit;
  color: #fff;

  display: flex;
  justify-content: space-around;
  gap: 8vw;

  @media (max-width: 58.75em) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 6rem;
  }
`;

const colorChange = keyframes`
    to {
        color: #ffad31;
    }    
`;

const H2 = styled.h2`
  text-transform: uppercase;
  font-size: clamp(4.8rem, 6.6vw, 10rem);
  font-weight: 500;
  letter-spacing: -0.12vw;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  align-self: center;

  @media (max-width: 58.75em) {
    align-self: flex-start;
  }

  .span-em {
    color: #fff;
    animation: ${colorChange} linear forwards;
    animation-timeline: view(50vh 0);
  }
`;

const TestimonialsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

const TestimonialBox = styled.div`
  position: relative;
`;

const P = styled.p`
  font-weight: 300;
  font-size: clamp(2rem, 2vw, 3rem);
  position: relative;
  z-index: 1;
`;

const QuoteImg = styled.img`
  position: absolute;
  top: -70%;
  left: -9%;
  z-index: 0;

  width: clamp(5rem, 7vw, 10rem);

  @media (max-width: 58.75em) {
    /* top: -80%; */
    /* left: -4%; */
    left: -2.8rem;
    top: -2.8rem;
  }
`;

export default function Testimonials({ onIntersection }) {
  const ref = useRef(null);
  useEffect(() => {
    const options = {
      // rootMargin: "-50%",
      rootMargin: "0% 0% -100% 0%",
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting === true) {
        onIntersection(true);
      } else {
        onIntersection(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersection]);
  return (
    <Section id="testimonials" ref={ref}>
      <Div>
        <H2>
          <span>Navigating</span>
          <span className="span-em">Tomorrow, </span>
          <span>one story</span>
          <span>at a time</span>
        </H2>
        <TestimonialsDiv>
          <TestimonialBox>
            <P>
              The products from CosmicDrop exceeded my expectations, providing
              the essentials for survival with unparalleled quality.
            </P>
            <QuoteImg src={QuoteIcon} alt="QuoteIcon svg" />
          </TestimonialBox>
          <TestimonialBox>
            <P>
              CosmicDrops's technological tools became my lifeline in the
              unexplored territories. Their commitment to innovation truly sets
              them apart
            </P>
            <QuoteImg src={QuoteIcon} alt="QuoteIcon svg" />
          </TestimonialBox>
          <TestimonialBox>
            <P>
              The health and wellness products from CosmicDrop have been my
              source of strength and vitality.
            </P>
            <QuoteImg src={QuoteIcon} alt="QuoteIcon svg" />
          </TestimonialBox>
        </TestimonialsDiv>
      </Div>
    </Section>
  );
}
