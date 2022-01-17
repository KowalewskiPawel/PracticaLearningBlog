import styled from "styled-components";

import { getColor, getMedias } from "../../styles/utils";

const PostPageArticle = styled.article`
  margin: 2rem auto 2rem 25rem;
  width: 80%;

  @media (max-width: ${getMedias("desktop")}) {
    margin: 2rem;
    width: 90%;
  }

  & > pre {
    overflow: auto;
  }

  & > p {
    margin: 2rem;
  }

  & > * {
    margin: 1rem;
    max-width: 70%;
  }

  & > a {
    text-decoration: none !important;
    color: ${getColor("accent")};
  }

  @media (max-width: ${getMedias("tablet")}) {
    margin: 0.5rem;

    & > * {
      max-width: 90%;
    }
  }
`;

export default PostPageArticle;
