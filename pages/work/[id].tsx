import Layout from "../../components/layout";
import { getMyWorkData, getAllWorkIds, markdownToHtml } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next"; //tsx
import Markdown from "markdown-to-jsx";
import { Heading, HStack, Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function Post({
  data,
}: {
  data: {
    titre: string;
    markdown_1: string;
    markdown_2: string;
    markdown_3: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title> Projet : {data.titre} </title>
      </Head>

      <article>
        <Heading as="h1" textAlign="center" className={utilStyles.headingXl}>
          Projet : {data.titre}
        </Heading>
        <Flex w="full" justifyContent={"right"}>
          <Button
            onClick={() => {
              console.log("test");
            }}
          >
            let's explore it
          </Button>
        </Flex>
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
