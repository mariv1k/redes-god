import * as S from "./global/styles";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SolvedTest } from "./components/SolvedTest";
import Header from "./components/Header";
import { Main } from "./global/styles";

const App = () => {
  return (
    <S.App>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/solved" element={<SolvedTest />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </S.App>
  );
};

export default App;
