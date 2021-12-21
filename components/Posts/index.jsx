import styled from "styled-components";

import { getMedias } from "../../styles/utils";

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 1rem;

  @media (max-width: ${getMedias("mobile")}) {
    grid-template-columns: 1fr;
  }
`;

export default Posts;
