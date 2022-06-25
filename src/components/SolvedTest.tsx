import { useEffect } from "react";
import * as S from "../global/styles";
import { TestManager } from "./Test";

export const SolvedTest = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <S.SolvedTest>{TestManager.SolvedQuestionsGroup()}</S.SolvedTest>;
};
