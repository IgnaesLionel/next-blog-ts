import React from "react";

import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Center,
  Flex,
  Badge,
  Image,
  background,
} from "@chakra-ui/react";

const MyWorkCard = () => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const textColor = useColorModeValue("black", "white");
  return (
    <Box w="full">
      <Box
        p="5"
        maxW="320px"
        borderWidth="2px"
        borderRadius="10px"
        w="full"
        bg={bgColor}
        color={textColor}
      >
        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />

        <Text mt={2} fontSize="10px" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
      </Box>
    </Box>
  );
};

export default MyWorkCard;
