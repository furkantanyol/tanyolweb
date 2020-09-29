import React, { ReactElement } from "react";
import Head from "next/head";
import { Spacer } from "@geist-ui/react";
import Layout from "../components/layout";
import { getAllPosts, Items } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import HomeCover from "../components/home-cover";
import HomeAbout from "../components/home-about";

const Index = (): ReactElement => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <HomeCover />
        <Spacer y={3} />
        <HomeAbout />
      </Layout>
    </>
  );
};

export default Index;

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
