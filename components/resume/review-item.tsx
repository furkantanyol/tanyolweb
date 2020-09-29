import React, { ReactElement } from "react";
import { Grid } from "@geist-ui/react";
import Review from "./review";

type ReviewItemProps = {
  author: string;
  title: string;
  project: string;
  rating: number;
  comment: string;
  date: string;
  list: Array<ReactElement | string>;
};

const ReviewItem = ({
  author,
  title,
  project,
  rating,
  comment,
  date,
  list,
}: ReviewItemProps): ReactElement => {
  return (
    <Grid.Container
      alignItems="center"
      className="list-date-view-container"
      key={title}
    >
      <Grid xs={24} md={16} className="list-date-view-title">
        {title}
      </Grid>
      <Grid xs={24} md={8} className="list-date-view-date">
        {date}
      </Grid>
      <Grid xs={24}>
        <ul className="list-date-view-list">
          {list.map((el, i) => (
            <li key={i} className="list-date-view-list-item">
              {el}
            </li>
          ))}
        </ul>
      </Grid>
      <Grid xs={24}>
        <Review
          author={author}
          project={project}
          rating={rating}
          comment={comment}
          date={date}
        />
      </Grid>
    </Grid.Container>
  );
};

export default ReviewItem;
