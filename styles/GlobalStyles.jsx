import { createGlobalStyle } from "styled-components";

import { getColor, getFontFamily, getFontWeight, getMedias } from "./utils";

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
    font-family: ${getFontFamily("Primary")};
  }
  
  body {
    color: ${getColor("White")};
    max-width: 100%;
    overflow-x: hidden;
    background: ${getColor("Dark")};
    font-size: 1.125rem;
    line-height: 1.6;
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

    button {
        display: inline-block;
        padding: 0.5em 2.5em;
        background: ${getColor("Accent")};
        color: ${getColor("Dark")};
        text-decoration: none;
        cursor: pointer;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: ${getFontWeight("bold")};
        transition: transform 200ms ease-in-out;
    }

    button:hover {
        transform: scale(1.1);
    }
    
  h1,h2,h3 {
    line-height: 1;
    margin: 0;
  }

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 3.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

    @media (max-width: ${getMedias("tablet")}) {
        body {
            font-size: 1.125rem;
        }

        h1 {
            font-size: 3rem;
        }

        h2 {
            font-size: 2.25rem;
        }
        
        h3 {
            font-size: 1.25rem;
        }
    }

    a {
        text-decoration: none !important;
    }
`;

export default GlobalStyles;
