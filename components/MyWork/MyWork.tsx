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
const MyWork = () => {
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
          My Work
        </Text>

        <SimpleGrid mx="20px" columns={[1, 2, 4]} spacing="40px">
          <MyWorkCard />
          <MyWorkCard />
          <MyWorkCard />
          <MyWorkCard />
        </SimpleGrid>
        <HStack justifyContent="right">
          <Button my="10px" mx="30px">
            <Link href="/blog">
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
