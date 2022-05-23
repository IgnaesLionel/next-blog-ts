import Layout from "../../components/layout";
import { getMyWorkData, getAllWorkIds, markdownToHtml } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next"; //tsx
import Markdown from "markdown-to-jsx";
import {
  Heading,
  HStack,
  Box,
  Button,
  Flex,
  Text,
  Center,
  SimpleGrid,
  ButtonGroup,
} from "@chakra-ui/react";
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
    <Box className="mainBackground" pt="1px" minHeight="150vh">
      <Layout>
        <div>
          <Head>
            <title> Projet {data.titre} </title>
          </Head>

          <article>
            <Heading as="h1" className={utilStyles.headingXl} pl="30px">
              Projet {data.titre}
            </Heading>

            <Box margin="0 auto" w="80%">
              {data.markdown_1 ? <Markdown>{data.markdown_1}</Markdown> : null}

              {data.markdown_2 ? (
                <Box m="50px">
                  <Markdown>{data.markdown_2}</Markdown>
                </Box>
              ) : null}
            </Box>
            <Box mt="40px" display="flex" justifyContent="center">
              <SimpleGrid
                columns={[2, 2, 4, 4]}
                textAlign="center"
                lineHeight="90px"
                spacing={["5px", "5px", "5px"]}
                w="50%"
                alignContent="center"
                alignItems="center"
              >
                <Markdown
                  children={data.markdown_3}
                  options={{ wrapper: React.Fragment }}
                />
              </SimpleGrid>
            </Box>
          </article>
          <Center mb="50px">
            <ButtonGroup mt="40px" isAttached>
              <Button colorScheme={"messenger"}>
                <Link href={data.fullUrl}>
                  <a>
                    <Text fontSize="15px" color="white">
                      Try it!
                    </Text>
                  </a>
                </Link>
              </Button>
              <Button colorScheme={"messenger"}>
                <Link href={"/work"}>
                  <a>
                    <Text fontSize="15px" color="white">
                      back
                    </Text>
                  </a>
                </Link>
              </Button>
            </ButtonGroup>
          </Center>
        </div>
      </Layout>
    </Box>
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

    revalidate: 120,
  };
};
