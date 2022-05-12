import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";
import MyWorkCard from "../MyWorkCard/MyWorkCard";
import Link from "next/link";
const MyWork = ({
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
  }[];
  host: string;
}) => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const txtColor = useColorModeValue("#010101", "#b4ddff");
  return (
    <div>
      <Box position="relative" bgColor={bgColor}>
        <Text
          pt="30px"
          ml="30px"
          mb="30px"
          textAlign="left"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["md", "xl", "3xl"]}
          fontWeight="extrabold"
          color={txtColor}
          fontFamily="'Merienda One', sans-serif"
        >
          My Work
        </Text>

        <SimpleGrid mx="20px" columns={[1, 2, 4]} spacing="40px">
          {data.map((data) => (
            <MyWorkCard key={data.id} data={data} host={host} />
          ))}
        </SimpleGrid>
        <HStack justifyContent="right">
          <Button my="10px" mx="30px">
            <Link href="/work">
              <a>
                <Text fontSize="15px">more projects...</Text>
              </a>
            </Link>
          </Button>
        </HStack>
      </Box>
    </div>
  );
};

export default MyWork;
