import Layout from "../../components/layout";
import { getMyPostData, getAllPostIds, markdownToHtml } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next"; //tsx
import CodeComponent from "../../components/CodeComponent";

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
    <Layout>
      <Head>
        <title> {data.titre} </title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}> {data.titre}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={data.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.markup_1 }} />

        {data.code_1 ? (
          <pre className="codePrism">
            <CodeComponent code={data.code_1} language="javascript" />
          </pre>
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: data.markup_2 }} />

        {data.code_2 ? (
          <pre className="codePrism">
            <CodeComponent code={data.code_2} language="javascript" />
          </pre>
        ) : null}
        <div dangerouslySetInnerHTML={{ __html: data.markup_3 }} />
        {data.code_3 ? (
          <pre className="codePrism">
            <CodeComponent code={data.code_3} language="javascript" />
          </pre>
        ) : null}
      </article>
    </Layout>
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

  await markdownToHtml(data.markup_1).then(function (result) {
    data.markup_1 = result.contentHtml;
  });

  await markdownToHtml(data.markup_2).then(function (result) {
    data.markup_2 = result.contentHtml;
  });
  await markdownToHtml(data.markup_3).then(function (result) {
    data.markup_3 = result.contentHtml;
  });

  return {
    props: {
      data,
    },
  };
};
