import Layout from "../../components/layout";
import { getMyWorkData, getAllWorkIds, markdownToHtml } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next"; //tsx
import Markdown from "markdown-to-jsx";
import { Heading, HStack, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export default function Post({
  data,
}: {
  data: {
    titre: string;
    markdown_1: string;
    markdown_2: string;
    markdown_3: string;
    fullUrl: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title> Projet : {data.titre} </title>
      </Head>

      <article>
        <Heading as="h1" className={utilStyles.headingXl}>
          Projet : {data.titre}
        </Heading>
        <Flex w="full"></Flex>
        {data.markdown_1 ? (
          <Box m="100">
            <Markdown>{data.markdown_1}</Markdown>
          </Box>
        ) : null}

        {data.markdown_2 ? (
          <Box m="100">
            <Markdown>{data.markdown_2}</Markdown>
          </Box>
        ) : null}
        <HStack p="30" justifyContent={"center"}>
          <Markdown
            children={data.markdown_3}
            options={{ wrapper: React.Fragment }}
          />
        </HStack>
      </article>

      <Button justifyContent="flex-end">
        <Link href={data.fullUrl}>
          <a>
            <Text fontSize="15px">let's explore it!</Text>
          </a>
        </Link>
      </Button>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllWorkIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getMyWorkData(params?.id as string);
  const data = postData[0];

  return {
    props: {
      data,
    },
  };
};
