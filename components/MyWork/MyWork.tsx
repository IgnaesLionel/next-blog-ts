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
  return (
    <div>
      <Box position="relative" p={["0px", "15px", "40px"]}>
        <Text
          pt="30px"
          ml="30px"
          mb="30px"
          textAlign="left"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["md", "xl", "3xl"]}
          fontWeight="extrabold"
          color="#b4ddff"
          fontFamily="'Merienda One', sans-serif"
        >
          My Work
        </Text>

        <SimpleGrid
          m={["5px", "5px", "5px"]}
          columns={[1, 2, 4]}
          spacing={["10px", "10px", "10px"]}
        >
          {data.map((data) => (
            <MyWorkCard key={data.id} data={data} host={host} />
          ))}
        </SimpleGrid>
        <HStack justifyContent="right">
          <Button colorScheme="messenger" mt="50px" mx="30px">
            <Link href="/work">
              <a>
                <Text fontSize="15px" color="black">
                  more projects...
                </Text>
              </a>
            </Link>
          </Button>
        </HStack>
      </Box>
    </div>
  );
};

export default MyWork;
