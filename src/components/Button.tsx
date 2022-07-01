import { useNavigate } from "react-router-dom";
import parameters from "../global/parameters";
import * as S from "../global/styles";

export const CheckSolutionsButton = () => {
  const navigate = useNavigate();
  const handleCheckSolutionsButton = (): void => {
    navigate("/solved-exam");
  };

  return <S.Button1 onClick={handleCheckSolutionsButton}>Corregir</S.Button1>;
};

export const GithubButton = () => {
  return (
    <S.Button1
      style={{marginLeft: "auto"}} onClick={() => window.open("https://github.com/mariod8/redes-god")}
    >
      {parameters.svg.github}
    </S.Button1>
  );
};

export const NextQuestionButton = () => {
  const navigate = useNavigate();
  const handleNextQuestionButton = (): void => {
    navigate("/");
  };

  return (
    <S.Button1 onClick={handleNextQuestionButton}>
      {parameters.svg.rightArrow}
    </S.Button1>
  );
};

export const ReloadQuestionButton = () => {
  const navigate = useNavigate();
  const handleReloadQuestionButton = (): void => {
    navigate("/");
  };

  return (
    <S.Button1 onClick={handleReloadQuestionButton}>
      {parameters.svg.reloadQuestion}
    </S.Button1>
  );
};

export const GoToExamButton = () => {
  const navigate = useNavigate();
  const handleGoToExamButton = (): void => {
    navigate("/exam");
  };

  return <S.Button1 onClick={handleGoToExamButton}>Examen</S.Button1>;
};

export const GoToSoloExamButton = () => {
  const navigate = useNavigate();
  const handleGoToSoloExamButton = (): void => {
    navigate("/");
  };

  return (
    <S.Button1 onClick={handleGoToSoloExamButton}>Preguntas sueltas</S.Button1>
  );
};
