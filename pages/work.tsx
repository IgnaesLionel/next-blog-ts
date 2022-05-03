import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getMyData } from "../lib/posts";
import { GetStaticProps } from "next"; //tsx
import MyWorkCard from "../components/MyWorkCard/MyWorkCard";
import { SimpleGrid } from "@chakra-ui/react";

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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h2>my work</h2>

      <SimpleGrid mx="20px" columns={[1, 2, 4]} spacing="40px">
        {getAllMyWork.map((data) => (
          <MyWorkCard key={data.id} data={data} host={host} />
        ))}
      </SimpleGrid>
    </Layout>
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
