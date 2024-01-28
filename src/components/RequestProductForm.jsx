import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  z-index: 888;
  transform: translate(-50%, -50%);
  padding: 2rem 3vw;
  border-radius: 6px;
  background: #04060c;
`;

const H3 = styled.h3`
  color: #fff;
  font-size: clamp(3rem, 4vw, 5.4rem);
  font-weight: 500;
  white-space: nowrap;
  margin-bottom: 4vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  letter-spacing: -0.1vw;

  .cross {
    display: inline-block;
    scale: 1.2;
    cursor: pointer;
    color: #fff;
    transition: color 0.2s ease;
    &:hover {
      color: #999;
    }
  }
`;

const FormDiv = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
`;

const Select = styled.select`
  border-radius: 2.5rem;
  padding: 1rem 2rem;
  text-align: center;
  cursor: pointer;
  font-size: clamp(1.8rem, 1.4vw, 2.2rem);
  color: #012a4a;
`;

const Input = styled.input`
  border-radius: 2.5rem;
  padding: 1rem 2rem;
  text-align: center;
  font-size: clamp(1.8rem, 1.4vw, 2.2rem);
  color: #012a4a;
`;

const Button = styled.button`
  border-radius: 2.5rem;
  padding: 1rem 6rem;
  text-align: center;
  font-size: clamp(1.8rem, 1.4vw, 2.2rem);
  color: #012a4a;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

export default function RequestProductForm({ onClose }) {
  return (
    <Div>
      <H3>
        Request a product{" "}
        <span className="cross" onClick={onClose}>
          &times;
        </span>
      </H3>
      <FormDiv>
        <Select>
          <option value="">Select Category</option>
          <option value="Survival Essentials">Survival Essentials</option>
          <option value="Tech and Gear">Tech and Gear</option>
          <option value="Eco Cultivation">Eco Cultivation</option>
          <option value="Others">Others</option>
        </Select>
        <Input placeholder="Add item here"></Input>
        <Button>Submit</Button>
      </FormDiv>
    </Div>
  );
}
