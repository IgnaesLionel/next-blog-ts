import Layout from "../../components/layout";
import { getMyWorkData, getAllWorkIds, markdownToHtml } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next"; //tsx

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
        <title> {data.titre} </title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}> {data.titre}</h1>
        <div className={utilStyles.lightText}></div>
        <div dangerouslySetInnerHTML={{ __html: data.markdown_1 }} />
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

  await markdownToHtml(data.markdown_1).then(function (result) {
    data.markdown_1 = result.contentHtml;
  });

  await markdownToHtml(data.markdown_2).then(function (result) {
    data.markdown_2 = result.contentHtml;
  });
  await markdownToHtml(data.markdown_3).then(function (result) {
    data.markdown_3 = result.contentHtml;
  });

  return {
    props: {
      data,
    },
  };
};
