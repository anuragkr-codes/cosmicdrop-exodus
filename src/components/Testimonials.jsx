import styled from "styled-components";
import QuoteIcon from "../assets/QuoteIcon.svg";

const Section = styled.section`
  width: 100vw;
  background: #030509;
  padding: 8rem 2rem;

  @media (max-width: 41.25em) {
    padding: 8rem 2rem;
  }
`;

const Div = styled.div`
  max-width: 140rem;
  margin: auto;
  height: 100%;
  background-color: inherit;
  color: #fff;

  display: flex;
  justify-content: space-around;
  gap: 12rem;

  @media (max-width: 58.75em) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 6rem;
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

  .span-tomorrow {
    color: #ffad31;
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

export default function Testimonials() {
  return (
    <Section>
      <Div>
        <H2>
          <span>Navigating</span>
          <span className="span-tomorrow">Tomorrow, </span>
          <span>one story</span>
          <span>at a time</span>
        </H2>
        <TestimonialsDiv>
          <TestimonialBox>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </P>
            {/* <MySvg style={{ width: "50px", height: "50px" }} /> */}
            <QuoteImg src={QuoteIcon} alt="QuoteIcon svg" />
          </TestimonialBox>
          <TestimonialBox>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </P>
            {/* <MySvg style={{ width: "50px", height: "50px" }} /> */}
            <QuoteImg src={QuoteIcon} alt="QuoteIcon svg" />
          </TestimonialBox>
          <TestimonialBox>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </P>
            {/* <MySvg style={{ width: "50px", height: "50px" }} /> */}
            <QuoteImg src={QuoteIcon} alt="QuoteIcon svg" />
          </TestimonialBox>
        </TestimonialsDiv>
      </Div>
    </Section>
  );
}
