import styled from "styled-components";

const Section = styled.section`
  /* width: 100vw; */
  background: #030509;
  padding: 8rem 4rem 12rem 4rem;
`;

const Div = styled.div`
  max-width: 140rem;
  margin: auto;
  height: 100%;
  background-color: inherit;
  color: #fff;

  display: flex;
  justify-content: space-around;
  gap: 6vw;

  @media (max-width: 58.75em) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    gap: 6rem;
  }
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
    font-size: 2.8rem;
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

export default function TimerSection() {
  return (
    <Section>
      <Div>
        <DivTimer>
          <PTimer>Our next drop in </PTimer>
          <TimerBox>
            <UnitBox>
              <span className="time">01</span>
              <span className="label">days</span>
            </UnitBox>
            <DividerBox>:</DividerBox>
            <UnitBox>
              <span className="time">10</span>
              <span className="label">hours</span>
            </UnitBox>
            <DividerBox>:</DividerBox>
            <UnitBox>
              <span className="time">24</span>
              <span className="label">mins</span>
            </UnitBox>
            <DividerBox>:</DividerBox>
            <UnitBox>
              <span className="time">15</span>
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
    </Section>
  );
}
