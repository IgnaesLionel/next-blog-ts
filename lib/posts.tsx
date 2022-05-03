import { remark } from "remark";
import html from "remark-html";

export async function getAllPostIds() {
  const data = await fetch(`${process.env.DB_HOST}items/Post/`).then((r) =>
    r.json()
  );

  const paths = data.data.map((post: any) => ({
    params: { id: post.url },
  }));

  return paths;
}

export async function getAllWorkIds() {
  const data = await fetch(`${process.env.DB_HOST}items/Work/`).then((r) =>
    r.json()
  );

  const paths = data.data.map((post: any) => ({
    params: { id: post.url },
  }));

  return paths;
}

export async function getMyData(url: string) {
  const getdata = await fetch(`${process.env.DB_HOST}${url}`);
  const response = await getdata.json();
  return response;
}

export async function getMyPostData(url: string) {
  const getdata = await fetch(
    `${process.env.DB_HOST}items/Post?filter[url][_eq]=${url}`
  );
  const data = await getdata.json();
  return data.data;
}

export async function getMyWorkData(url: string) {
  const getdata = await fetch(
    `${process.env.DB_HOST}items/Work?filter[url][_eq]=${url}`
  );
  const data = await getdata.json();
  return data.data;
}

export async function markdownToHtml(markdown: string) {
  const markdownToHtml = await remark().use(html).process(markdown);
  const contentHtml = markdownToHtml.toString();
  return { contentHtml };
}
