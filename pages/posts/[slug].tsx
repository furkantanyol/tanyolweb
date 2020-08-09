import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { Container, Text } from "@zeit-ui/react";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import DateFormater from "../../components/date-formater";
import markdownStyles from "../../components/markdown-styles.module.css";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, preview }: Props): ReactElement => {
  const router = useRouter();
  const { title, date, ogImage, content } = post;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <Text h1>Loading</Text>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title} | Furkan Tanyol Blog</title>
                <meta property="og:image" content={ogImage.url} />
              </Head>
              <Text h6 className="post-date">
                <DateFormater dateString={date} />
              </Text>
              <Text h1>{title}</Text>
              <div
                className={markdownStyles.markdown}
                dangerouslySetInnerHTML={{ __html: content }} // eslint-disable-line react/no-danger
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

type StaticPropsType = {
  props: { post: { [p: string]: string; content: string } };
};

export async function getStaticProps({
  params,
}: Params): Promise<StaticPropsType> {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

type PathType = {
  params: {
    slug: string;
  };
};

type StaticPathsType = {
  paths: PathType[];
  fallback: boolean;
};

export async function getStaticPaths(): Promise<StaticPathsType> {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(
      (post): PathType => {
        return {
          params: {
            slug: post.slug,
          },
        };
      }
    ),
    fallback: false,
  };
}
