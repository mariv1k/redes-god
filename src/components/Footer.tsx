import { Link } from "react-router-dom";
import * as S from "../global/styles";

const Footer = () => {
  return (
    <S.Footer>
       <Link to="/author">Autor</Link>
    </S.Footer>
  );
};

export default Footer;