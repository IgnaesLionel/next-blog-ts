import React from "react";
import {
  Center,
  useColorModeValue,
  Box,
  Text,
  Img,
  Flex,
} from "@chakra-ui/react";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import { FooterWithSocialIcons } from "../components/FooterWithSocialIcons/FooterWithSocialIcons";

const about = () => {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const txtColor = useColorModeValue("#010101", "#b4ddff");
  return (
    <Box className="mainBackground" color={txtColor}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Box minH={"70vh"}>
          <Text
            as="h2"
            mt="0px"
            pt="20px"
            pl="30px"
            fontFamily="'Merienda One', sans-serif"
          >
            About me
          </Text>
          <Center>
            <Img
              borderRadius="50%"
              src="../../images/me.webp"
              w={["100px", "150px", "200px"]}
              alt="lionel"
              mt="50px"
            />
          </Center>
          <Center>
            <Box
              mt="30px"
              maxWidth="80vw"
              borderColor="whiteAlpha.500"
              borderStyle="solid"
              borderWidth="3px"
              borderRadius="10px"
              bg={"blackAlpha.500"}
              w={["300px", "450px", "600px"]}
            >
              <Text textAlign={"center"} p="20px">
                My name is Lionel and I am a developer and graphic designer.
                Currently I'm living in France.
              </Text>

              <Text textAlign={"center"} p="20px">
                Now I am available for freelance projects, commission or another
                interesting offers.
              </Text>
            </Box>
          </Center>
        </Box>

        <FooterWithSocialIcons />
      </Layout>
    </Box>
  );
};

export default about;
