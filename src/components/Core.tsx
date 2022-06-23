import styled from "styled-components";
import colorData from "../global/color";
import RGQuestions, { currentQuestions } from "./Question";

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
      <CheckButton onClick={handleCheckClick}>Comprobar</CheckButton>
    </Controls>
  );
};

const handleCheckClick = () => {
  currentQuestions.forEach(currQuestion => {
    console.log(currQuestion.checked)
  })
}

const Controls = styled.div`
  width: 95%;
  max-width: 1000px;
`;

const CheckButton = styled.div`
  width: fit-content;
  padding: 16px;
  display: flex;
  place-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${colorData.light.front1};
  border: 2px solid ${colorData.light.front3};
  margin-left: auto;
  user-select: none;
  color: ${colorData.light.front2};

  &:hover {
    background-color: ${colorData.light.front3};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Core = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
`;

export default RGCore;
