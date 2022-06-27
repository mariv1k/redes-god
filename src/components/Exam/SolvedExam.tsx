import { useEffect } from "react";
import * as S from "../../global/styles";
import { clamp, round } from "../../global/utils";
import { ExamManager } from "../Exam/Exam";

const ExamScore = () => {
  const totalQuestions = ExamManager.questions.length;
  const correctQuestions = ExamManager.questions.filter(
    (question) =>
      question.choice !== "-" && question.choice === question.data.solution
  ).length;
  const wrongQuestions = ExamManager.questions.filter(
    (question) =>
      question.choice !== "-" && question.choice !== question.data.solution
  ).length;
  const notAnsweredQuestions = ExamManager.QuestionsPerTest - wrongQuestions - correctQuestions

  return (
    <div>
      <div>Correctas: {correctQuestions}</div>
      <div>Erróneas: {wrongQuestions}</div>
      <div>No respondidas: {notAnsweredQuestions}</div>
      <div style={{ fontWeight: 700 }}>
        Puntuación:{" "}
        {clamp(
          round((correctQuestions - wrongQuestions / 3) / totalQuestions),
          0,
          1
        ) * 10}
      </div>
    </div>
  );
};

export const SolvedExam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.SolvedExam>
      {ExamManager.SolvedQuestionGroup(35)}
      {ExamScore()}
    </S.SolvedExam>
  );
};
