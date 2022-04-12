import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getMyPost } from "../lib/posts";
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
}: {
  getAllMyPost: {
    date: string;
    titre: string;
    id: number;
    url: string;
    code_1: string | null;
    code_2: string | null;
    code_3: string | null;
    markup_1: string | null;
    markup_2: string | null;
    markup_3: string | null;
    Preview: string | null;
  }[];
  host: string;
}) {
  const bgColor = useColorModeValue("white", "white");

  console.log(host);

  const slicedPost = getAllMyPost.slice(Math.max(getAllMyPost.length - 4, 1));

  return (
    <Box>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        {/*        <svg
          preserveAspectRatio="none"
          width="auto"
          height="74"
          viewBox="0 0 1440 74"
        >
          <path
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
            fill="#033278"
          ></path>
        </svg> */}
        <Header />
        <MyWork />
        <ContactMe />
        <MyBlog data={slicedPost} host={host}></MyBlog>
        <FooterWithSocialIcons />

        {/*     <Image
              priority
              src="/images/Logo-Poulpe.png"
              height={826}
              width={826}
              alt="Logo"
            /> */}

        {/* 
        <div>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <div>
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <rect x="0" y="0" width="900" height="600" fill={bgColor}></rect>
            <path
              d="M0 431L21.5 426.2C43 421.3 86 411.7 128.8 406.7C171.7 401.7 214.3 401.3 257.2 396.8C300 392.3 343 383.7 385.8 385.2C428.7 386.7 471.3 398.3 514.2 407C557 415.7 600 421.3 642.8 411C685.7 400.7 728.3 374.3 771.2 365.5C814 356.7 857 365.3 878.5 369.7L900 374L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#4dd4ff"
            ></path>
            <path
              d="M0 452L21.5 443.8C43 435.7 86 419.3 128.8 412.2C171.7 405 214.3 407 257.2 408.3C300 409.7 343 410.3 385.8 414.5C428.7 418.7 471.3 426.3 514.2 421.7C557 417 600 400 642.8 401.8C685.7 403.7 728.3 424.3 771.2 426.7C814 429 857 413 878.5 405L900 397L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#3db9e8"
            ></path>
            <path
              d="M0 429L21.5 432.7C43 436.3 86 443.7 128.8 450.3C171.7 457 214.3 463 257.2 463.2C300 463.3 343 457.7 385.8 452.5C428.7 447.3 471.3 442.7 514.2 443.8C557 445 600 452 642.8 455.3C685.7 458.7 728.3 458.3 771.2 450.5C814 442.7 857 427.3 878.5 419.7L900 412L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#309fd1"
            ></path>
            <path
              d="M0 448L21.5 453.7C43 459.3 86 470.7 128.8 476.7C171.7 482.7 214.3 483.3 257.2 477.3C300 471.3 343 458.7 385.8 455.3C428.7 452 471.3 458 514.2 457C557 456 600 448 642.8 449.7C685.7 451.3 728.3 462.7 771.2 470.2C814 477.7 857 481.3 878.5 483.2L900 485L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#2585b9"
            ></path>
            <path
              d="M0 481L21.5 478.5C43 476 86 471 128.8 469C171.7 467 214.3 468 257.2 474C300 480 343 491 385.8 494C428.7 497 471.3 492 514.2 485.5C557 479 600 471 642.8 474.5C685.7 478 728.3 493 771.2 495.8C814 498.7 857 489.3 878.5 484.7L900 480L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#1c6ca0"
            ></path>
            <path
              d="M0 510L21.5 505C43 500 86 490 128.8 489.5C171.7 489 214.3 498 257.2 504C300 510 343 513 385.8 510C428.7 507 471.3 498 514.2 493.7C557 489.3 600 489.7 642.8 495.5C685.7 501.3 728.3 512.7 771.2 511.5C814 510.3 857 496.7 878.5 489.8L900 483L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#145487"
            ></path>
            <path
              d="M0 539L21.5 537.7C43 536.3 86 533.7 128.8 533.7C171.7 533.7 214.3 536.3 257.2 536.8C300 537.3 343 535.7 385.8 530.2C428.7 524.7 471.3 515.3 514.2 515.8C557 516.3 600 526.7 642.8 530.5C685.7 534.3 728.3 531.7 771.2 533C814 534.3 857 539.7 878.5 542.3L900 545L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#0d3d6e"
            ></path>
            <path
              d="M0 528L21.5 532.7C43 537.3 86 546.7 128.8 548.2C171.7 549.7 214.3 543.3 257.2 543.7C300 544 343 551 385.8 553.8C428.7 556.7 471.3 555.3 514.2 553.7C557 552 600 550 642.8 549.2C685.7 548.3 728.3 548.7 771.2 547.7C814 546.7 857 544.3 878.5 543.2L900 542L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#052855"
            ></path>
            <path
              d="M0 572L21.5 571C43 570 86 568 128.8 568.7C171.7 569.3 214.3 572.7 257.2 571.2C300 569.7 343 563.3 385.8 564C428.7 564.7 471.3 572.3 514.2 575C557 577.7 600 575.3 642.8 573C685.7 570.7 728.3 568.3 771.2 565.5C814 562.7 857 559.3 878.5 557.7L900 556L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#00143d"
            ></path>
          </svg>
        </div>
 */}
      </Layout>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const getAllMyPost = await getMyPost();
  return {
    props: {
      getAllMyPost: getAllMyPost.data,
      host: process.env.DB_HOST,
    },
  };
};
