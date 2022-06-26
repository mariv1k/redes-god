import { useState } from "react";
import parameters from "../global/parameters";
import * as S from "../global/styles";
import { CheckSolutionsButton, GithubButton, NewTestButton } from "./Button";

const Header = () => {
  var prevScrollpos = window.pageYOffset;
  const [styleTop, setStyleTop] = useState("0");

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setStyleTop("0");
    } else {
      setStyleTop(`-${parameters.height.header}px`);
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <S.Header style={{ top: styleTop }}>
      <CheckSolutionsButton />
      <NewTestButton />
      <GithubButton />
    </S.Header>
  );
};

export default Header;
