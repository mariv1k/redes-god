import * as S from "../../global/styles";
import { ReloadQuestionButton } from "../Button";
import { ExamManager } from "../Exam/Exam";

const SoloExam = () => {
  ExamManager.InitQuestions(undefined, true);

  return (
    <S.SoloQuestionExam>{ExamManager.NextSoloQuestion()}{<ReloadQuestionButton />}</S.SoloQuestionExam>
  );
};

export default SoloExam;
