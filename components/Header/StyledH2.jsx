import styled from "styled-components";
import {
  getAnimation,
  getColor,
  getFontFamily,
  getFontWeight,
} from "../../styles/utils";

const StyledH2 = styled.h2`
  font-family: ${getFontFamily("secondary")};
  font-weight: ${getFontWeight("regular")};
  color: ${getColor("dark")};

  & > span {
    color: ${getColor("accent")};
    font-weight: ${getFontWeight("bold")};
    animation: ${getAnimation("blink")} 1s infinite;
  }
`;

export default StyledH2;
