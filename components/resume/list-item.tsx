import React, { ReactElement } from "react";
import { Grid } from "@zeit-ui/react";

type ListItemProps = {
  title: string;
  type: string;
  date: string;
  list: Array<ReactElement | string>;
};

const ListItem = ({ title, type, date, list }: ListItemProps): ReactElement => {
  return (
    <Grid.Container className="list-date-view-container">
      <Grid xs={24} md={16} className="list-date-view-title">
        {title} {type && <span className="list-date-view-type">({type})</span>}
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
    </Grid.Container>
  );
};

export default ListItem;
