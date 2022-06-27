import { useEffect } from "react";
import * as S from "../../global/styles";
import { ReloadQuestionButton } from "../Button";
import { ExamManager } from "../Exam/Exam";

const SoloExam = () => {
  ExamManager.InitQuestions(undefined, true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.SoloQuestionExam>{ExamManager.NextSoloQuestion()}{<ReloadQuestionButton />}</S.SoloQuestionExam>
  );
};

export default SoloExam;
