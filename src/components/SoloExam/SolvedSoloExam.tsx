import { useEffect } from "react";
import * as S from "../../global/styles";
import { NextQuestionButton } from "../Button";
import { ExamManager } from "../Exam/Exam";

const SoloSolvedExam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.SolvedExam>
      {ExamManager.SolvedSoloQuestion()} {<NextQuestionButton />}
    </S.SolvedExam>
  );
};

export default SoloSolvedExam;
