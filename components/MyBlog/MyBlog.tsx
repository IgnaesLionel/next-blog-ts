import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import MyBlogCard from "../MyBlogCard/MyBlogCard";

const MyBlog = ({
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
  }[];
  host: string;
}) => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const txtColor = useColorModeValue("#010101", "#b4ddff");

  // order by id
  const posts = [...data];
  posts.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <div>
      <Box bg={bgColor}>
        <Text
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
          My Blog
        </Text>

        <SimpleGrid mx="20px" columns={[1, 2, 4]} spacing="40px">
          {posts.map((data) => (
            <MyBlogCard key={data.id} data={data} host={host} />
          ))}
        </SimpleGrid>

        <HStack justifyContent="right">
          <Button my="10px" mx="30px">
            <Link href="/blog">
              <a>
                <Text fontSize="15px">more articles...</Text>
              </a>
            </Link>
          </Button>
        </HStack>
      </Box>
    </div>
  );
};

export default MyBlog;
