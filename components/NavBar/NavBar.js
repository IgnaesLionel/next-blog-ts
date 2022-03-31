import React from "react";
import { Text, HStack, Box } from "@chakra-ui/react";
import Link from "next/link";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
const NavBar = ({ children }) => {
  return (
    <nav>
      <HStack h="50px" bg={"blue.600"} justifyContent="center">
        <Link href="/">
          <a>
            <Text fontSize="15px">01.Home</Text>
          </a>
        </Link>
        <Link href="/About">
          <a>
            <Text fontSize="15px">02.About me</Text>
          </a>
        </Link>
        <Link href="/Project">
          <a>
            <Text fontSize="15px">Project</Text>
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
  );
};

export default NavBar;
