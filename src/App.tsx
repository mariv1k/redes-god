import * as S from "./global/styles";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SolvedTest } from "./components/SolvedTest";
import Header from "./components/Header";
import { Footer, Main } from "./global/styles";
import Author from "./components/Author";

const App = () => {
  return (
    <S.App>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/solved" element={<SolvedTest />} />
            <Route path="/author" element={<Author />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </S.App>
  );
};

export default App;
