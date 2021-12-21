import styled from "styled-components";
import { getColor, getFontWeight, getMedias } from "../../styles/utils";

const StyledFooter = styled.footer`
  background: ${getColor("black")};
  color: ${getColor("light")};
  text-align: center;
  padding: 2.5rem 0;
  font-size: 1.25rem;

  & > a {
    font-weight: ${getFontWeight("bold")};
    color: inherit;
    text-decoration: none;
  }

  & > a:hover {
    opacity: 0.7;
  }

  & > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 2rem;
    padding: 0;
  }

  @media (max-width: ${getMedias("mobile")}) {
    font-size: 1rem;
  }
`;

export default StyledFooter;
