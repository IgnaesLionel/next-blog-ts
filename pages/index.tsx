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
  }[];
}) {
  const bgColor = useColorModeValue("white", "white");

  console.log(getAllMyWork);
  const slicedPost = getAllMyPost.slice(Math.max(getAllMyPost.length - 4, 0));
  const slicedWork = getAllMyWork.slice(Math.max(getAllMyWork.length - 4, 0));

  return (
    <Box>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Header />
        <MyWork data={slicedWork} host={host} />
        <ContactMe />
        <MyBlog data={slicedPost} host={host} />

        <svg
          preserveAspectRatio="none"
          width="auto"
          height="74"
          viewBox="0 0 1440 74"
        >
          <path
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
            fill="#000278"
          ></path>
        </svg>
        <FooterWithSocialIcons />

        {/*     <Image
              priority
              src="/images/Logo-Poulpe.png"
              height={826}
              width={826}
              alt="Logo"
            /> */}
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
