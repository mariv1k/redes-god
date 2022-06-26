import { useNavigate } from "react-router-dom";
import constants from "../global/constants";
import * as S from "../global/styles";

export const CheckSolutionsButton = () => {
  const navigate = useNavigate();
  const handleCheckSolutionsButton = (): void => {
    navigate("/solved");
  };

  return <S.Button onClick={handleCheckSolutionsButton}>Comprobar</S.Button>;
};

export const NewTestButton = () => {
  const navigate = useNavigate();
  const handleNewTestButton = (): void => {
    navigate("/");
    window.location.reload()
  };

  return <S.Button onClick={handleNewTestButton}>Nuevo test</S.Button>;
};

export const GithubButton = () => {
  return <S.Button onClick={() => window.open("https://github.com/mariod8/redes-god")}>{constants.svg.github}</S.Button>;
};
