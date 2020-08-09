import React, { ReactElement } from "react";
import { Card, Grid, Text } from "@zeit-ui/react";
import Stars from "./stars";

type ReviewProps = {
  project: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

const Review = ({
  project,
  author,
  rating,
  comment,
  date,
}: ReviewProps): ReactElement => {
  return (
    <Card shadow className="review-card">
      <Grid.Container className="review-container" alignItems="center">
        <Grid xs={24} className="review-title">
          <Text small>{project}</Text>
        </Grid>
        <Grid xs={24} md={12} className="review-ratings">
          <Stars rating={rating} />
        </Grid>
        <Grid xs={24} md={12} className="review-date">
          <Text small>{date}</Text>
        </Grid>
        <Grid xs={24}>
          <Text small i>
            {comment}
          </Text>
        </Grid>
        <Grid xs={24}>
          <Text small b className="review-author">
            {author}
          </Text>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default Review;
