import { useEffect } from "react";
import * as S from "../../global/styles";
import { clamp } from "../../global/utils";
import { ExamManager } from "../Exam/Exam";

const ExamScore = () => {
  const totalQuestions = ExamManager.QuestionsPerTest;
  const correctQuestions = ExamManager.questions.filter(
    (question) =>
      question.choice !== "-" && question.choice === question.data.solution
  ).length;
  const wrongQuestions = ExamManager.questions.filter(
    (question) =>
      question.choice !== "-" && question.choice !== question.data.solution
  ).length;
  const notAnsweredQuestions =
    ExamManager.QuestionsPerTest - wrongQuestions - correctQuestions;

  return (
    <div className="ExamScore">
      <div>Correctas: {correctQuestions}</div>
      <div>Erróneas: {wrongQuestions}</div>
      <div>No respondidas: {notAnsweredQuestions}</div>
      <br></br>
      <div style={{ fontWeight: 700 }}>
        Puntuación:{" "}
        {(
          clamp(
            (correctQuestions - wrongQuestions / 3) / totalQuestions,
            0,
            1
          ) * 10
        ).toFixed(2)}
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
