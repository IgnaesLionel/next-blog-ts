import {
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface DateInterface {
  date?: string;
}
export const FooterWithSocialIcons = ({ date }: { date?: string }) => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");

  return (
    <Flex
      as="footer"
      role="contentinfo"
      py={{ base: "12", md: "16" }}
      justifyContent="center"
    >
      <Stack
        spacing={{ base: "4", md: "4" }}
        position="relative"
        w="full"
        pb="80px"
      >
        <ButtonGroup variant="ghost" justifyContent="center">
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

        <Text
          fontSize={["10px", "12px", "15px"]}
          color="subtle"
          position="absolute"
          right="20px"
          bottom="-10px"
        >
          &copy; {new Date().getFullYear()} Ignaes Lionel
        </Text>

        <Text
          fontSize={["10px", "12px", "15px"]}
          color="subtle"
          position="absolute"
          right="20px"
          bottom="-25px"
        >
          All rights reserved
        </Text>
        <Text
          fontSize={["10px", "12px", "15px"]}
          color="subtle"
          position="absolute"
          right="20px"
          bottom="-40px"
        >
          Generated : {date}
        </Text>
      </Stack>
    </Flex>
  );
};
