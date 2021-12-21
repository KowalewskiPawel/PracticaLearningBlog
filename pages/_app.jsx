import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
