import styled from "styled-components";
import { getColor, getShadow } from "../../styles/utils";

const Wrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${getShadow("boxShadow")};
  background: ${getColor("dark")};

  & > h3 {
    color: ${getColor("accent")};
  }

  & > * {
    padding: 0.3rem;
  }

  & > button {
    margin-left: 0.2rem;
  }
`;

export default Wrapper;
