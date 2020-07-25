import React, { ReactElement } from "react";
import { Text, Row, Card } from "@zeit-ui/react";
import Link from "next/link";
import Author from "../types/author";
import { PATHS } from "../lib/constants";
import DateFormater from "./date-formater";

type PostProps = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author?: Author;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  content?: string;
};
const Post = ({
  title,
  coverImage,
  date,
  slug,
  author,
  excerpt,
}: PostProps): ReactElement => {
  return (
    <Link href={`${PATHS.POSTS}/${slug}`}>
      <a href="/posts/[slug]">
        <Card shadow className="post">
          <Row gap={0.1}>
            <Text h3 className="post-title">
              {title}
            </Text>
          </Row>
          <Row gap={0.1}>
            <Text h6 className="post-excerpt">
              {excerpt}
            </Text>
          </Row>
          <Row>
            <Text h6 className="post-date">
              <DateFormater dateString={date} />
            </Text>
          </Row>
        </Card>
      </a>
    </Link>
  );
};

export default Post;
