import styled from "styled-components";
import colorData from "../global/color";
import RGCore from "./Core";

const RGContainer = () => {
  return (
    <Container>
      <RGCore />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 200px;
  padding: 40px 0px;
  background-color: ${colorData.light.background};
  color: ${colorData.light.text1}
`;

export default RGContainer;
