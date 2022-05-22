import React from "react";
import Link from "next/link";
import { Box, Text, Image } from "@chakra-ui/react";

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
  return (
    <Box
      m={"5px"}
      w="full"
      h="full"
      display="flex"
      flexGrow={1}
      justifyContent="space-around"
    >
      <Link href={`/work/${data.url}`}>
        <a>
          <Box
            p={["15px", "20px", "20px"]}
            maxW="320px"
            borderWidth="2px"
            borderRadius="10px"
            w="full"
            bg={"whiteAlpha.300"}
            display="flex"
            flexDirection="column"
            flexGrow={1}
            justifyContent="space-around"
            mr="10px"
            mb="10px"
            maxH="300px"
            minH="260px"
          >
            <Image
              m="auto"
              borderRadius="md"
              src={`${host}assets/${data.image}.jpg`}
              alt={data.titre}
              maxH="150px"
            />

            <Text
              mt={2}
              pl="5px"
              fontSize={["15px", "16px", "18px"]}
              fontWeight="semibold"
              lineHeight="short"
            >
              {data.titre}
            </Text>
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default MyWorkCard;
