import styled from "styled-components";

import { getColor, getMedias } from "../../styles/utils";

const PostPageWrapper = styled.article`
  margin: 2rem;

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
    & > * {
      max-width: 100%;
    }
  }
`;

export default PostPageWrapper;
