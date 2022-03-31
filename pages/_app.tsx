import "../styles/global.css";
import { AppProps } from "next/app"; //tsx
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </ChakraProvider>
  );
}
