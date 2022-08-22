import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../../styles/theme/theme";
import { ThemeProvider } from '@mui/material/styles';
import Layout from "../components/common/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
