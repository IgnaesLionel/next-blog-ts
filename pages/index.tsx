import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getMyData } from "../lib/posts";
import Image from "next/image";
import { GetStaticProps } from "next"; //tsx
import { Text, Box, Center, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import MyWork from "../components/MyWork/MyWork";
import MyBlog from "../components/MyBlog/MyBlog";
import ContactMe from "../components/ContactMe/ContactMe";
import { FooterWithSocialIcons } from "../components/FooterWithSocialIcons/FooterWithSocialIcons";

export default function Home({
  getAllMyPost,
  host,
  getAllMyWork,
}: {
  getAllMyPost: {
    date: string;
    titre: string;
    id: number;
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
  getAllMyWork: {
    id: number;
    resume: string;
    titre: string;
    tags: null;
    image: null;
    url: string;
    fullUrl: string;
    markdown_1: string | null;
    markdown_2: string | null;
    markdown_3: string | null;
  }[];
}) {
  const slicedPost = getAllMyPost.slice(Math.max(getAllMyPost.length - 4, 0));
  const slicedWork = getAllMyWork.slice(Math.max(getAllMyWork.length - 4, 0));

  return (
    <Box position="relative">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Header />
        <MyWork data={slicedWork} host={host} />
        <ContactMe />
        <MyBlog data={slicedPost} host={host} />

        <FooterWithSocialIcons />
      </Layout>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const getAllMyPost = await getMyData("items/Post/");
  const getAllMyWork = await getMyData("items/Work/");
  return {
    props: {
      getAllMyPost: getAllMyPost.data,
      getAllMyWork: getAllMyWork.data,
      host: process.env.DB_HOST,
    },
  };
};
