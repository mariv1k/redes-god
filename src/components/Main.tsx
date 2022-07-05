import { Route, Routes } from "react-router-dom"
import * as S from "../global/styles"
import Author from "./Author"
import Exam from "./Exam/Exam"
import { SolvedExam } from "./Exam/SolvedExam"
import SoloExam from "./SoloExam/SoloExam"
import SolvedSoloExam from "./SoloExam/SolvedSoloExam"

const Main = () => {
  return (
    <S.Main>
      <Routes>
        <Route path="/" element={<SoloExam />} />
        <Route path="/solved-exam" element={<SolvedExam />} />
        <Route path="/solved-solo-exam" element={<SolvedSoloExam />} />
        <Route path="/author" element={<Author />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </S.Main>
  )
}

export default Main
