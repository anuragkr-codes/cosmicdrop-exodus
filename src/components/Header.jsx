import styled from "styled-components";

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;

  width: 100vw;
  height: 8rem;
  padding: 0 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;
`;

const FeatureLinkDiv = styled.div`
  /* font-size: 3rem; */
  /* font-size: 2.4vw; */
  font-size: clamp(2rem, 2.4vw, 3rem);
  font-weight: 300;

  @media (max-width: 41.25em) {
    display: none;
  }
`;

const LogoDiv = styled.div`
  font-size: clamp(2.2rem, 2.6vw, 3.2rem);
  font-weight: 300;
  font-weight: 300;

  @media (max-width: 41.25em) {
    font-weight: 400;
  }
`;

export default function Header() {
  return (
    <HeaderElement>
      <FeatureLinkDiv>Feature 1</FeatureLinkDiv>
      <FeatureLinkDiv>Feature 2</FeatureLinkDiv>
      <LogoDiv>Name</LogoDiv>
      <FeatureLinkDiv>Feature 3</FeatureLinkDiv>
      <FeatureLinkDiv>Feature 4</FeatureLinkDiv>
    </HeaderElement>
  );
}
