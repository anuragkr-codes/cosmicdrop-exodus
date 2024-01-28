import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";
import Overlay from "./Overlay";
import RequestProductForm from "./RequestProductForm";

import { useEffect, useState } from "react";

const Section = styled.section`
  /* width: 100vw; */
  height: 200vh;
  background: #030509;
  padding: 0 2rem;
`;

const Div = styled.div`
  max-width: 140rem;
  height: 100vh;
  margin: auto;
  background-color: inherit;
  color: #fff;

  display: flex;
  align-items: center;
  gap: 6vw;

  @media (max-width: 58.75em) {
    height: 80vh;
    flex-direction: column-reverse;
    justify-content: flex-start;
    gap: 6rem;
  }

  position: sticky;
  top: 0;
`;

const DivTimer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const PTimer = styled.div`
  text-transform: uppercase;
  font-size: 7.4rem;
  font-size: clamp(3.8rem, 5.4vw, 7.4rem);
  font-weight: 500;
  white-space: nowrap;
`;

const TimerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UnitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 500;
  .time {
    /* font-size: 8.4rem; */
    font-size: clamp(4.8rem, 5.8vw, 8.4rem);
    color: #ffad31;
  }
  .label {
    font-size: clamp(1.6rem, 1.8vw, 2.8rem);
    text-transform: uppercase;
  }
`;

const DividerBox = styled.div`
  /* font-size: 8.4rem; */
  font-size: clamp(4.8rem, 5.8vw, 8.4rem);
  font-weight: 2.8rem;
  color: #ffad31;
`;

const H2 = styled.h2`
  text-transform: uppercase;
  font-size: clamp(4.8rem, 6.6vw, 10rem);
  font-weight: 500;
  letter-spacing: -0.12vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem 0;

  @media (max-width: 58.75em) {
    align-self: flex-end;
  }

  .span-em {
    color: #ffad31;
  }

  span {
    white-space: nowrap;
  }
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
  top: 79vh;
  left: 72vw;
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

  transition: background-color 0.2s;

  span {
    white-space: nowrap;
  }

  cursor: pointer;
  &:hover {
    background-color: #ffad31;
    color: #080c16;
  }

  @media (max-width: 77.5em) {
    top: 75vh;
    left: 70vw;
  }

  @media (max-width: 67.5em) {
    top: 71vh;
    left: 66vw;
  }

  @media (max-width: 57.5em) {
    top: 70vh;
    left: 56vw;
  }
`;

export default function TimerSection() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showProductForm, setShowProductForm] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    let target = new Date();
    if (currentHour >= 23) {
      target.setDate(target.getDate() + 1);
      target.setHours(8);
      target.setMinutes(0);
      target.setSeconds(0);
    } else if (currentHour < 8) {
      target.setHours(8);
      target.setMinutes(0);
      target.setSeconds(0);
    } else if (currentHour < 16) {
      target.setHours(16);
      target.setMinutes(0);
      target.setSeconds(0);
    } else {
      target.setHours(23);
      target.setMinutes(0);
      target.setSeconds(0);
    }

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleShowProductForm() {
    setShowProductForm((s) => !s);
  }
  return (
    <Section id="next-delivery">
      {showProductForm && (
        <>
          <Overlay zIndex={777} onClick={handleShowProductForm} />
          <RequestProductForm onClose={handleShowProductForm} />
        </>
      )}
      <Div>
        <DivTimer>
          <PTimer>Our next drop in </PTimer>
          <TimerBox>
            <UnitBox>
              <span className="time">{days}</span>
              <span className="label">days</span>
            </UnitBox>
            <DividerBox>:</DividerBox>
            <UnitBox>
              <span className="time">{hours}</span>
              <span className="label">hours</span>
            </UnitBox>
            <DividerBox>:</DividerBox>
            <UnitBox>
              <span className="time">{minutes}</span>
              <span className="label">mins</span>
            </UnitBox>
            <DividerBox>:</DividerBox>
            <UnitBox>
              <span className="time">{seconds}</span>
              <span className="label">secs</span>
            </UnitBox>
          </TimerBox>
        </DivTimer>
        <H2>
          <span className="span-em">Lifeline</span>
          <span className="span-em">Provisions </span>
          <span>now at your</span>
          <span>fingertips</span>
        </H2>
      </Div>
      <ButtonDiv>
        <ButtonBox>
          <CTAButton className="btn-cta">
            <span onClick={handleShowProductForm}>Something missing</span>
            <MdOutlineArrowOutward />
          </CTAButton>
        </ButtonBox>
      </ButtonDiv>
    </Section>
  );
}
