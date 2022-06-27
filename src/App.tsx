import * as S from "./global/styles";
import Exam from "./components/Exam/Exam";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SolvedExam } from "./components/Exam/SolvedExam";
import Header from "./components/Header";
import { Footer, Main } from "./global/styles";
import Author from "./components/Author";
import SoloExam from "./components/SoloExam/SoloExam";
import SolvedSoloExam from "./components/SoloExam/SolvedSoloExam";

const App = () => {
  return (
    <S.App>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<SoloExam />} />
            <Route path="/solved" element={<SolvedExam />} />
            <Route path="/solved-solo-exam" element={<SolvedSoloExam />} />
            <Route path="/author" element={<Author />} />
            <Route path="/exam" element={<Exam />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </S.App>
  );
};

export default App;
