import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import MyBlogCard from "../MyBlogCard/MyBlogCard";

const MyBlog = () => {
  const bgColor = useColorModeValue("#0066ff", "#033278");
  const txtColor = useColorModeValue("#010101", "#b4ddff");
  return (
    <div>
      <Box bg={bgColor}>
        <Text
          ml="30px"
          textAlign="left"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={["md", "xl", "3xl"]}
          fontWeight="extrabold"
          color={txtColor}
        >
          My Blog
        </Text>

        <SimpleGrid mx="20px" columns={[1, 2, 4]} spacing="40px">
          <MyBlogCard />
          <MyBlogCard />
          <MyBlogCard />
          <MyBlogCard />
        </SimpleGrid>
        <Button>
          <Link href="/blog">
            <a>
              <Text fontSize="15px">more articles...</Text>
            </a>
          </Link>
        </Button>
      </Box>
    </div>
  );
};

export default MyBlog;
