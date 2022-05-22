import React from "react";
import { Box, SimpleGrid, Text, Button, HStack } from "@chakra-ui/react";
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
  // order by id
  const posts = [...data];
  posts.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <div>
      <Box p={["0px", "15px", "40px"]}>
        <Text
          ml="30px"
          mb="30px"
          textAlign="left"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["md", "xl", "3xl"]}
          fontWeight="extrabold"
          fontFamily="'Merienda One', sans-serif"
          color="b4ddff"
        >
          My Blog
        </Text>

        <SimpleGrid
          m={["5px", "5px", "5px"]}
          columns={[1, 2, 3, 4]}
          spacing={["10px", "10px", "10px"]}
        >
          {posts.map((data) => (
            <MyBlogCard key={data.id} data={data} host={host} />
          ))}
        </SimpleGrid>

        <HStack justifyContent="right">
          <Button
            mt={["15px", "25px", "40px"]}
            mx="30px"
            colorScheme="messenger"
          >
            <Link href="/blog">
              <a>
                <Text fontSize="15px" color="black">
                  more articles...
                </Text>
              </a>
            </Link>
          </Button>
        </HStack>
      </Box>
    </div>
  );
};

export default MyBlog;
