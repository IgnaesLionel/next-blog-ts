import React from "react";
import { Text, HStack, Container, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
const NavBar = ({ children }) => {
  const textColor = "#70e6ff";
  return (
    <Container maxW="container.xl">
      <nav>
        <HStack
          h="50px"
          bg="#054690"
          justifyContent="center"
          fontFamily="'Merienda One', sans-serif"
          spacing={["15px", "30px", "60px"]}
        >
          <Link href="/">
            <a>
              <Text color={textColor} fontSize="15px">
                Home
              </Text>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text color={textColor} fontSize="15px">
                About
              </Text>
            </a>
          </Link>
          <Link href="/work">
            <a>
              <Text color={textColor} fontSize="15px">
                Work
              </Text>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Text color={textColor} fontSize="15px">
                Blog
              </Text>
            </a>
          </Link>
        </HStack>
        {children}
      </nav>
    </Container>
  );
};

export default NavBar;
