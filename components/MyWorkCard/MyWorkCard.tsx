import React from "react";
import Link from "next/link";
import { Box, Text, useColorModeValue, Image } from "@chakra-ui/react";

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
    fullUrl: string;
  };
  host: string;
}) => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box m={"5px"} w="full">
      <Link href={`/work/${data.url}`}>
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
      </Link>
    </Box>
  );
};

export default MyWorkCard;
