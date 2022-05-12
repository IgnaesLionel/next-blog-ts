import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getMyData } from "../lib/posts";
import { GetStaticProps } from "next"; //tsx
import MyWorkCard from "../components/MyWorkCard/MyWorkCard";
import { SimpleGrid, useColorModeValue, Box, Text } from "@chakra-ui/react";
import { FooterWithSocialIcons } from "../components/FooterWithSocialIcons/FooterWithSocialIcons";

export default function Work({
  getAllMyWork,
  host,
}: {
  getAllMyWork: {
    id: number;
    resume: string;
    titre: string;
    tags: null;
    image: null;
    url: string;
    fullUrl: string;
  }[];
  host: string;
}) {
  const bgColor = useColorModeValue("#50a0eb", "#04346a");
  const txtColor = useColorModeValue("#010101", "#b4ddff");
  return (
    <Box bg={bgColor} color={txtColor}>
      <Layout home>
        <Box minH={"70vh"}>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <Text
            as="h2"
            mt="0px"
            pt="20px"
            pl="30px"
            fontFamily="'Merienda One', sans-serif"
          >
            My Work
          </Text>
          <SimpleGrid mx="20px" columns={[1, 2, 4]} spacing="40px">
            {getAllMyWork.map((data) => (
              <MyWorkCard key={data.id} data={data} host={host} />
            ))}
          </SimpleGrid>
        </Box>
      </Layout>
      <FooterWithSocialIcons />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const getAllMyPost = await getMyData("items/Work/");

  return {
    props: {
      getAllMyWork: getAllMyPost.data,
      host: process.env.DB_HOST,
    },
  };
};
