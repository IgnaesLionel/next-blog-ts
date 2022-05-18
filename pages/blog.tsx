import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getMyData } from "../lib/posts";
import { GetStaticProps } from "next"; //tsx
import MyBlogCard from "../components/MyBlogCard/MyBlogCard";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { FooterWithSocialIcons } from "../components/FooterWithSocialIcons/FooterWithSocialIcons";

export default function Blog({
  getAllMyPost,
  host,
}: {
  getAllMyPost: {
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
}) {
  // order by id
  const posts = [...getAllMyPost];
  posts.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <Box className="mainBackground" minH={"70vh"}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Text
          as="h2"
          mt="0px"
          pt="20px"
          pl="30px"
          fontFamily="'Merienda One', sans-serif"
          mb="90px"
        >
          My Blog
        </Text>

        <SimpleGrid
          mx="20px"
          columns={[1, 2, 4]}
          spacing={["10px", "10px", "10px"]}
        >
          {posts.map((data) => (
            <MyBlogCard key={data.id} data={data} host={host} />
          ))}
        </SimpleGrid>
      </Layout>
      <FooterWithSocialIcons />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const getAllMyPost = await getMyData("items/Post/");

  return {
    props: {
      getAllMyPost: getAllMyPost.data,
      host: process.env.DB_HOST,
    },

    revalidate: 120,
  };
};
