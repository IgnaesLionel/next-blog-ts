import {
  ButtonGroup,
  Box,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const FooterWithSocialIcons = () => {
  const bgColor = useColorModeValue("#0066FF", "#033278");
  const textColor = useColorModeValue("black", "white");
  return (
    <Flex
      bg={bgColor}
      as="footer"
      role="contentinfo"
      py={{ base: "12", md: "16" }}
    >
      <Stack spacing={{ base: "4", md: "4" }} pl={"40px"}>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>

        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Ignaes Lionel. All rights reserved.
        </Text>
      </Stack>
    </Flex>
  );
};
