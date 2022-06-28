import { useEffect } from "react";
import * as S from "../global/styles";
const image = require("../res/author.jpg");

const Author = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Author>
      <img src={image} alt="" />
      <span>yo ^</span>
    </S.Author>
  );
};

export default Author;
