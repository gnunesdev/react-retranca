import { ThemeProvider } from "styled-components";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import GlobalStyle from "./../styles/global";

import light from "./../styles/themes/light";
import dark from "./../styles/themes/dark";

import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [persistedTheme, setPersistedTheme] = useState("LIGHT");
  const activeTheme = persistedTheme === "LIGHT" ? light : dark;

  const toggleTheme = () => {
    if (persistedTheme === "LIGHT") {
      setPersistedTheme("DARK");
    } else {
      setPersistedTheme("LIGHT");
    }
  };

  return (
    <>
      <ThemeProvider theme={activeTheme}>
        <Header
          isThemeChecked={activeTheme === dark}
          toggleTheme={toggleTheme}
        />
        <Footer />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
