import { useEffect } from "react";
import * as S from "../global/styles";
import { clamp, round } from "../global/utils";
import { TestManager } from "./Test";

const TestScore = () => {
  const totalQuestions = TestManager.questions.length;
  const correctQuestions = TestManager.questions.filter(
    (question) => question.choice !== "-" && question.choice === question.data.solution
  ).length;
  const wrongQuestions = TestManager.questions.filter(
    (question) => question.choice !== "-" && question.choice !== question.data.solution
  ).length;
  const notAnsweredQuestions = TestManager.questions.filter(
    (question) => question.choice === "-"
  ).length; 
    const display = `
    Correctas: ${correctQuestions}\n
    Erróneas: ${wrongQuestions}\n
    No respondidas: ${notAnsweredQuestions}\n
    Puntuación: ${clamp(
      round((correctQuestions - wrongQuestions / 3) / totalQuestions),
      0,
      1
    ) * 10}
    `

  return (
    <div>
      {display}
    </div>
  );
};

export const SolvedTest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.SolvedTest>
      {TestManager.SolvedQuestionsGroup()}
      {TestScore()}
    </S.SolvedTest>
  );
};
