import Layout from "../../components/layout";
import { getMyPostData, getAllPostIds, markdownToHtml } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next"; //tsx
import CodeComponent from "../../components/CodeComponent";
import Markdown from "markdown-to-jsx";
import { Heading, Center, Box, Button, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
export default function Post({
  data,
}: {
  data: {
    titre: string;
    date: string;
    markup_1: string;
    markup_2: string;
    markup_3: string;
    code_1: string;
    code_2: string;
    code_3: string;
  };
}) {
  return (
    <Box className="mainBackground" pt="1px" minHeight="150vh">
      <Layout>
        <Head>
          <title> {data.titre}</title>
        </Head>

        <article>
          <Center h="100px" color="white">
            <Heading as="h1" size="2xl">
              {data.titre}
            </Heading>
          </Center>
          <div className={utilStyles.lightText}>
            <Date dateString={data.date} />
          </div>
          <Box pl="50px" mt="50px">
            {data.markup_1 ? <Markdown>{data.markup_1}</Markdown> : null}
          </Box>
          <Box pl="90px" pr="90px">
            {data.code_1 ? (
              <pre className="codePrism">
                <CodeComponent code={data.code_1} language="javascript" />
              </pre>
            ) : null}
          </Box>
          <Box pl="50px">
            {data.markup_2 ? <Markdown>{data.markup_2}</Markdown> : null}
          </Box>
          {data.code_2 ? (
            <pre className="codePrism">
              <CodeComponent code={data.code_2} language="javascript" />
            </pre>
          ) : null}
          <Box pl="50px">
            {data.markup_3 ? <Markdown>{data.markup_3}</Markdown> : null}
          </Box>
          {data.code_3 ? (
            <pre className="codePrism">
              <CodeComponent code={data.code_3} language="javascript" />
            </pre>
          ) : null}
        </article>
        <Flex w="100%" justifyContent="center">
          <Button colorScheme={"messenger"}>
            <Link href={"/blog"}>
              <a>
                <Text fontSize="15px" color="black">
                  back
                </Text>
              </a>
            </Link>
          </Button>
        </Flex>
      </Layout>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getMyPostData(params?.id as string);
  const data = postData[0];

  return {
    props: {
      data,
    },

    revalidate: 120,
  };
};
