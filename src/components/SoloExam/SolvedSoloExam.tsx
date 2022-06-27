import * as S from "../../global/styles";
import { NextQuestionButton } from "../Button";
import { ExamManager } from "../Exam/Exam";

const SoloSolvedExam = () => {
  return (
    <S.SolvedExam>
      {ExamManager.SolvedSoloQuestion()} {<NextQuestionButton />}
    </S.SolvedExam>
  );
};

export default SoloSolvedExam;
