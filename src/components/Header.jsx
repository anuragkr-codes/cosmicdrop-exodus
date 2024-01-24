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
  font-size: 3rem;
  font-weight: 300;
`;

const LogoDiv = styled.div`
  font-size: 3.4rem;
  font-weight: 300;
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
