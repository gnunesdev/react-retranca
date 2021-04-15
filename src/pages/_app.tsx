import usePersistedState from './../utils/userPersistedState';

import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import GlobalStyle from './../styles/global';

import light from './../styles/themes/light';
import dark from './../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    theme.title === light.title ? setTheme(dark) : setTheme(light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header isChecked={theme === dark} toggleTheme={toggleTheme} />
        <Footer />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
