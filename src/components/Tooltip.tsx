import { FC } from "react";
import ReactTooltip from "react-tooltip";
import parameters from "../global/parameters";

const Tooltip: FC<string> = (text, id) => {
  return (
    <ReactTooltip
      id={id}
      place="bottom"
      effect="solid"
      backgroundColor={parameters.colors.color3}
      textColor={parameters.colors.color2}
    >
      {text}
    </ReactTooltip>
  );
};

export default Tooltip;
