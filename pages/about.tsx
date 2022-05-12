import React from "react";
import { SimpleGrid, useColorModeValue, Box, Text } from "@chakra-ui/react";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import { FooterWithSocialIcons } from "../components/FooterWithSocialIcons/FooterWithSocialIcons";

const about = () => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const txtColor = useColorModeValue("#010101", "#b4ddff");
  return (
    <Box bg={bgColor} color={txtColor}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Box minH={"70vh"}>
          <div>
            My name is Lionel and I am a developer and graphic designer.
            Currently I'm living in France. Now I am available for freelance
            projects, commission or another interesting offers.
          </div>
          <Text
            as="h2"
            mt="0px"
            pt="20px"
            pl="30px"
            fontFamily="'Merienda One', sans-serif"
          >
            My Blog
          </Text>
        </Box>
        <FooterWithSocialIcons />
      </Layout>
    </Box>
  );
};

export default about;
