import styled from "styled-components";
import { getColor } from "../../styles/utils";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 2rem;
  background-color: ${getColor("dark")};
`;

export default StyledHeader;
