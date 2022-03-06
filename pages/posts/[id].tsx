import Layout from '../../components/layout'
import { getAllPostIds, getPostData, getMyPostData, getAllPostIds2 } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next' //tsx
import Code from "../../components/code"

export default function Post({
  postData
}: {
  postData: {
    titre: string
    date: string
 
  }
}) {

const data = postData.data[0]

console.log(data)
  
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
       
        {data.code_1 ?        <pre className="codePrism">
        <Code code={data.code_1} language="javascript" />
        </pre> : null}

        <div dangerouslySetInnerHTML={{ __html: data.markup_2 }} />

        {data.code_2 ?        <pre className="codePrism">
        <Code code={data.code_2} language="javascript" />
        </pre> : null}
        <div dangerouslySetInnerHTML={{ __html: data.markup_3 }} />
        {data.code_3 ?        <pre className="codePrism">
        <Code code={data.code_3} language="javascript" />
        </pre> : null}
 
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds2()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
 /*  const postData = await getPostData(params?.id as string) */

  const postData = await getMyPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}