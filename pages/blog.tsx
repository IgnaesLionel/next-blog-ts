import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getMyPost } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next"; //tsx
import MyBlogCard from "../components/MyBlogCard/MyBlogCard";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";

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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h2>Blog</h2>

      <SimpleGrid mx="20px" columns={[1, 2, 4]} spacing="40px">
        {getAllMyPost.map((data) => (
          <MyBlogCard key={data.id} data={data} host={host} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const getAllMyPost = await getMyPost();

  return {
    props: {
      getAllMyPost: getAllMyPost.data,
      host: process.env.DB_HOST,
    },
  };
};
