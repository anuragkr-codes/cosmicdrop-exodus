import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 777;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  backdrop-filter: blur(8px);
`;

export default function Overlay({ onClick }) {
  return <Div onClick={() => onClick("")}></Div>;
}
