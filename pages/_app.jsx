import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <main className='container'>
          <Component {...pageProps} />
        </main>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
