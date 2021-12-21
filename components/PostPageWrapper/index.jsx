import styled from "styled-components";
import { getColor } from "../../styles/utils";

const PostPageWrapper = styled.article`
  color: ${getColor("dark")};
  margin: 2rem;

  & > pre {
    overflow: auto;
  }

  & > p {
    margin: 2rem;
  }

  & > * {
    margin: 1rem;
  }
`;

export default PostPageWrapper;
