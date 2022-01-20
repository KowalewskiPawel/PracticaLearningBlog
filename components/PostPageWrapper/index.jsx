import styled from "styled-components";

import { getColor, getMedias } from "../../styles/utils";

const PostPageArticle = styled.article`
  margin: 2rem 22.5vw;
  width: 80%;

  @media (max-width: ${getMedias("desktop")}) {
    margin: 2rem 15vw;
    width: 90%;
  }

  @media (max-width: ${getMedias("tablet")}) {
    margin: 2rem;
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
