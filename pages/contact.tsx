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
import ContactByMail from "../components/ContactByMail/ContactByMail";

const contact = () => {
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
            Contact me
          </Text>
          <Center>
            <ContactByMail />
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
                Thanks for contacting me, i will reply to you as soon as
                possible.
              </Text>
            </Box>
          </Center>
        </Box>

        <FooterWithSocialIcons />
      </Layout>
    </Box>
  );
};

export default contact;
