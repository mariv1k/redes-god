import ReactTooltip from "react-tooltip";
import parameters from "../global/parameters";

const Tooltip = (text: string, id: string) => {
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
