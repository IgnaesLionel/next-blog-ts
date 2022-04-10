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

const MyBlogCard = ({
  data,
}: {
  data: {
    id: number;
    date: string;
    titre: string;
    url: string;
    code_1: string | null;
    code_2: string | null;
    code_3: string | null;
    markup_1: string | null;
    markup_2: string | null;
    markup_3: string | null;
  };
}) => {
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
          {data.titre}
        </Text>
      </Box>
    </Box>
  );
};

export default MyBlogCard;
