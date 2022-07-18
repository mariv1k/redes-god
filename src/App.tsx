import * as S from "./global/styles"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <S.App>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </BrowserRouter>
    </S.App>
  )
}

export default App
