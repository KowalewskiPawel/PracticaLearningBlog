import { createGlobalStyle } from "styled-components";

import { getColor, getFontFamily, getFontWeight, getMedias } from "./utils";

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
    font-family: ${getFontFamily("primary")};
  }
  
  body {
    color: ${getColor("light")};
    max-width: 100%;
    overflow-x: hidden;
    background: ${getColor("white")};
    font-size: 1.125rem;
    line-height: 1.6;

    & > a {
        text-decoration: none !important;
    }
  }

  button {
    display: inline-block;
    padding: 0.5em 2.5em;
    background: ${getColor("accent")};
    border: none;
    border-radius: 0.1rem;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    margin: 0.5rem;

  & > p {
    color: ${getColor("dark")};
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: ${getFontWeight("bold")};
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }
  }

  section {
    padding: 5em 2em;
    }

    img {
        display: block;
        max-width: 100%;
    }

    strong {
        font-weight: ${getFontWeight("bold")};
    }
    
  h1,h2,h3 {
    line-height: 1;
    margin: 0;
  }

  h1, span {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }


    @media (max-width: ${getMedias("tablet")}) {
        body {
            font-size: 1.125rem;
        }

        h1, span {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.75rem;
        }
    }
`;

export default GlobalStyles;
