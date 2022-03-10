import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getMyPost } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next' //tsx
import CodeComponent from "../components/CodeComponent"


export default function Home({
  getAllMyPost
}: {
  getAllMyPost:{
    date: string
    titre: string
    id: number
    url: string
    code_1: string
  }[]
}) {

  const code = getAllMyPost[0].code_1
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {getAllMyPost.map(({ id, date, titre, url }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${url}`}>
                <a>{titre}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} /> 
              </small>
            </li>
          ))}
        </ul>
      </section>

      <pre className="codePrism">

<CodeComponent code={code} language="javascript" />

</pre>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async () => {

  const getAllMyPost = await getMyPost()

  return {
    props: {
      getAllMyPost : getAllMyPost.data ,
    }
  }
}