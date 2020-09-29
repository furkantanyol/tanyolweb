import React, { ReactElement } from "react";
import Head from "next/head";
import { Grid, Spacer } from "@geist-ui/react";
import Layout from "../components/layout";
import { getAllPosts, Items } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import PostType from "../types/post";
import Post from "../components/post";
import BlogCover from "../components/blog-cover";

type BlogProps = {
  allPosts: PostType[];
};

const Blog = ({ allPosts }: BlogProps): ReactElement => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <BlogCover />
        <Spacer y={3} />
        <Grid.Container gap={2} justify="center">
          {allPosts.length > 0 &&
            allPosts.map(({ title, date, slug, excerpt }) => (
              <Grid key={slug}>
                <Post title={title} excerpt={excerpt} slug={slug} date={date} />
              </Grid>
              // <Fieldset key={slug}>
              //   <Fieldset.Title>{title}</Fieldset.Title>
              //   <Fieldset.Subtitle>{excerpt}</Fieldset.Subtitle>
              //   <Fieldset.Footer>
              //     <Fieldset.Footer.Status>
              //       <DateFormater dateString={date} />
              //     </Fieldset.Footer.Status>
              //     <Fieldset.Footer.Actions>
              //       <Button auto size="mini">
              //         Actions
              //       </Button>
              //     </Fieldset.Footer.Actions>
              //   </Fieldset.Footer>
              // </Fieldset>
            ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default Blog;

type StaticPropsType = {
  props: { allPosts: Items[] };
};

export const getStaticProps = async (): Promise<StaticPropsType> => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
