import { useEffect } from "react";
import * as S from "../../global/styles";
import { ExamManager } from "../Exam/Exam";

const SoloSolvedExam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <S.SolvedExam>{ExamManager.SolvedSoloQuestion()}</S.SolvedExam>;
};

export default SoloSolvedExam;
