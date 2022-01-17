import styled from "styled-components";

import { getMedias } from "../../styles/utils";

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 1rem auto;
  width: 80%;

  @media (max-width: ${getMedias("desktop")}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${getMedias("mobile")}) {
    width: 90%;
  }
`;

export default Posts;
