import * as S from "./global/styles";
import Test from "./components/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SolvedTest } from "./components/SolvedTest";

const App = () => {
  return (
    <S.App>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/solved" element={<SolvedTest />} />
          </Routes>
        </BrowserRouter>
      </main>
    </S.App>
  );
};

export default App;
