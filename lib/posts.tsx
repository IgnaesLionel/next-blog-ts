import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getAllPostIds() {
  const data = await fetch(`${process.env.DB_HOST}items/Post/`).then((r) =>
    r.json()
  );

  const paths = data.data.map((post: any) => ({
    params: { id: post.url },
  }));

  return paths;
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}

export async function getMyPost() {
  const getdata = await fetch(`${process.env.DB_HOST}items/Post/`);
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

export async function markdownToHtml(markdown: string) {
  const markdownToHtml = await remark().use(html).process(markdown);
  const contentHtml = markdownToHtml.toString();
  return { contentHtml };
}
