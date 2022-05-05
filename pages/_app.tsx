import "../styles/global.css";
import { AppProps } from "next/app"; //tsx
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  const config = { useSystemColorMode: true, initialColorMode: "dark" };

  const theme = {
    styles: {
      global: {
        h1: {
          display: "block",
          fontSize: "2em",
          marginBlockStart: "0.67em",
          marginBlockEnd: "0.67em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        },
        h2: {
          display: "block",
          fontSize: "1.5em",
          marginBlockStart: "0.83em",
          marginBlockEnd: "0.83em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        },
        h3: {
          display: "block",
          fontSize: "1.17em",
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        },
        h4: {
          display: "block",
          fontSize: "1em",
          marginBlockStart: "1.33em",
          marginBlockEnd: "1.33em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        },
        h5: {
          display: "block",
          fontSize: "0.83em",
          marginBlockStart: "1.67em",
          marginBlockEnd: "1.67em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        },
        a: {
          color: "#58a6ff",
        },
        pre: {
          display: "block",
          fontFamily: "monospace",
          whiteSpace: "pre",
          margin: "1em 0",
        },
        strong: {
          fontWeight: "bold",
        },
        em: { fontStyle: "italic" },

        blockquote: {
          display: "block",
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          marginInlineStart: "40px",
          marginInlineEnd: "40px",

          borderLeft: "5px solid #ccc",
          margin: "1.5em 10px",
          padding: "0.5em 10px 0.5em 10px",
        },
      },
      ...config,
    },
  };

  const customTheme = extendTheme(theme);
  return (
    <ChakraProvider theme={customTheme}>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </ChakraProvider>
  );
}
