import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";

const Section = styled.section`
  /* width: 100vw; */
  height: 230vh;
  background: #030509;
  padding: 0 2rem;
  position: relative;
`;

const Div = styled.div`
  max-width: 140rem;
  height: 100vh;
  margin: auto;
  background-color: inherit;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-transform: uppercase;
  /* font-size: 20rem; */
  font-size: clamp(6.4rem, 13.2vw, 20rem);
  font-weight: 500;
  letter-spacing: -0.4vw;

  position: sticky;
  top: 0;
`;

const ButtonDiv = styled.div`
  max-width: 140rem;
  height: 100vh;
  margin: auto;
  background-color: transparent;
  color: #fff;
  position: sticky;
  top: 0;
`;

const ButtonBox = styled.div`
  display: inline-block;
`;

const CTAButton = styled.div`
  position: absolute;
  top: 76vh;
  left: 27vw;
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

  span {
    white-space: nowrap;
  }

  transition: background-color 0.2s;

  cursor: pointer;
  &:hover {
    background-color: #ffad31;
    color: #080c16;
  }

  @media (max-width: 77.5em) {
    top: 72vh;
  }

  @media (max-width: 67.5em) {
    top: 68vh;
  }

  @media (max-width: 57.5em) {
    top: 64vh;
  }
`;

const Footer = styled.footer`
  max-width: 80rem;
  position: absolute;
  bottom: 1vh;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 2rem;
  color: #fff;
  white-space: nowrap;

  @media (max-width: 41.25em) {
    font-size: 1.2rem;
  }
`;

export default function CTAEnd() {
  return (
    <Section>
      <Div>
        <span>Order your </span>
        <span>Supplies, Now</span>
      </Div>
      <ButtonDiv>
        <ButtonBox>
          <CTAButton className="btn-cta">
            <span>Order now</span> <MdOutlineArrowOutward />
          </CTAButton>
        </ButtonBox>
      </ButtonDiv>
      <Footer>Made with ❤️ in Manipal, by team devDuet</Footer>
    </Section>
  );
}
