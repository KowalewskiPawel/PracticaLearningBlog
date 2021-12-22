import { keyframes } from "styled-components";

export const fontFamily = {
  primary: "Source Sans Pro, sans-serif;",
  secondary: "Source Code Pro, monospace;",
};

export const fontWeight = {
  bold: "900",
  regular: "300",
};

export const color = {
  light: "#fff",
  darkGray: "rgb(30, 30, 30) none repeat scroll 0% 0%",
  white: "rgb(241, 239, 239)",
  dark: "#303030",
  accent: "#cfff76",
  black: "#111",
};

export const medias = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const shadows = {
  boxShadow: `0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
      0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15)`,
};

export const animations = {
  blink: keyframes`
    0% {
        opacity: 1.0;
    }
    100% {
        opacity: 0;
    }
`,
};

const theme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  shadows,
  animations,
};

export default theme;
