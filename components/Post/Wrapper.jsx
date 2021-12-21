import styled from "styled-components";
import { getShadow } from "../../styles/utils";

const Wrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${getShadow("boxShadow")};
`;

export default Wrapper;
