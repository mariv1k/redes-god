import { useEffect } from "react";
import * as S from "../../global/styles";
import { ExamManager } from "../Exam/Exam";

const SoloExam = () => {
  ExamManager.InitQuestions(undefined, true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.SoloQuestionExam>
      {ExamManager.NextSoloQuestion()}
    </S.SoloQuestionExam>
  );
};

export default SoloExam;
