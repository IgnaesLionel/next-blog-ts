import React from "react";
import Link from "next/link";
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

const MyWorkCard = ({
  data,
  host,
}: {
  data: {
    id: number;
    resume: string;
    titre: string;
    tags: null;
    image: null;
    url: string;
  };
  host: string;
}) => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const textColor = useColorModeValue("black", "white");

  console.log(data.image);
  return (
    <Box m={"5px"} w="full">
      <a href={`${data.url}`} target="_blank">
        <Box
          p="5"
          maxW="320px"
          borderWidth="2px"
          borderRadius="10px"
          w="full"
          bg={bgColor}
          color={textColor}
        >
          <Image borderRadius="md" src={`${host}assets/${data.image}.jpg`} />

          <Text mt={2} fontSize="10px" fontWeight="semibold" lineHeight="short">
            {data.titre}
          </Text>
        </Box>
      </a>
    </Box>
  );
};

export default MyWorkCard;
