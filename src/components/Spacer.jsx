import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  background: linear-gradient(
    180deg,
    #0e1322 0%,
    #0a0f1b 31.73%,
    #060a13 57.86%,
    #000 100%
  );
`;
export default function Spacer() {
  return <Div></Div>;
}
