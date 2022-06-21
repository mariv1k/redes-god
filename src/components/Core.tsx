import styled from "styled-components";
import RGQuestions from "./Question";

const RGCore = () => {
  return (
    <Core>
      <RGQuestions />
      <RGControls />
    </Core>
  );
};

const RGControls = () => {
  return (
    <Controls>
      <CheckButton />
    </Controls>
  )
}

const Controls = styled.div`
  
`

const CheckButton = styled.div`
  padding: 24px;
`

const Core = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
`;

export default RGCore;
