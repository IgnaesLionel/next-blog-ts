import React from "react";
import { Text, HStack, Container } from "@chakra-ui/react";
import Link from "next/link";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
const NavBar = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <nav>
        <HStack h="50px" bg={"blue.300"} justifyContent="center">
          <Link href="/">
            <a>
              <Text fontSize="15px">Home</Text>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text fontSize="15px">About</Text>
            </a>
          </Link>
          <Link href="/work">
            <a>
              <Text fontSize="15px">Work</Text>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Text fontSize="15px">Blog</Text>
            </a>
          </Link>
          <DarkModeButton />
        </HStack>
        {children}
      </nav>
    </Container>
  );
};

export default NavBar;
