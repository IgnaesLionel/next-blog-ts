import React from "react";
import Link from "next/link";
import Date from "../../components/date";
import { Box, Text, useColorModeValue, Image } from "@chakra-ui/react";

const MyBlogCard = ({
  data,
  host,
}: {
  data: {
    id: number;
    date: string;
    titre: string;
    url: string;
    code_1: string | null;
    code_2: string | null;
    code_3: string | null;
    markup_1: string;
    markup_2: string | null;
    markup_3: string | null;
    Preview: string | null;
  };
  host: string;
}) => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const textColor = useColorModeValue("black", "white");

  const slicedMarkup = data.markup_1.substring(0, 50) + "...";

  return (
    <Box
      m={"5px"}
      w="full"
      h="full"
      display="flex"
      flexGrow={1}
      justifyContent="space-around"
    >
      <Link href={`/blog/${data.url}`}>
        <Box
          p="5"
          maxW="280px"
          minW="200px"
          borderWidth="2px"
          borderRadius="10px"
          bg={bgColor}
          color={textColor}
          display="flex"
          flexDirection="column"
          flexGrow={1}
          justifyContent="space-around"
        >
          <small>
            <Date dateString={data.date} />
          </small>
          <Image
            m="auto"
            borderRadius="md"
            maxH="150px"
            src={`${host}assets/${data.Preview}.jpg`}
          />

          <Text
            mt={2}
            fontSize={["20px", "20px", "22px"]}
            fontWeight="semibold"
            lineHeight="short"
          >
            {data.titre}
          </Text>
          <Text mt={2} fontSize="15px" fontWeight="semibold" lineHeight="short">
            {slicedMarkup}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default MyBlogCard;
