import React, { ReactElement } from "react";
import { Grid } from "@zeit-ui/react";
import Description from "../description";

const TECHNOLOGIES = {
  COL_1: [
    {
      TITLE: "JavaScript",
      CONTENT:
        "prefer using ESNext features and functional programming paradigms",
    },
    {
      TITLE: "HTML, CSS",
      CONTENT: "mobile first, cross-device, cross-browser",
    },
    {
      TITLE: "React",
      CONTENT: (
        <span>
          for building user interface, along with{" "}
          <b style={{ fontWeight: 400 }}>Redux</b> for state management
        </span>
      ),
    },
    {
      TITLE: "React Native",
      CONTENT: "for native mobile app development",
    },
    {
      TITLE: "TypeScript",
      CONTENT: "for static type-checking",
    },
    {
      TITLE: (
        <span>
          Next<small style={{ fontSize: "0.75em", fontWeight: 600 }}>.js</small>
          , Gatsby
        </span>
      ),
      CONTENT: "for server-side rendering and static site generation",
    },
    {
      TITLE: "Sass, Less, JSS",
      CONTENT: "for css pre-processing and optimization",
    },
  ],
  COL_2: [
    {
      TITLE: (
        <span>
          Node<small style={{ fontSize: "0.75em", fontWeight: 600 }}>.js</small>
        </span>
      ),
      CONTENT: (
        <span>
          with <b style={{ fontWeight: 400 }}>Express</b>
        </span>
      ),
    },
    {
      TITLE: "Jest",
      CONTENT: "for testing, following TDD",
    },
    {
      TITLE: "Python",
      CONTENT: (
        <span>
          mostly <b style={{ fontWeight: 400 }}>Django</b>
        </span>
      ),
    },

    {
      TITLE: "Postgres, MongoDB",
      CONTENT: "database management, Rest & GraphQL API",
    },
    { TITLE: "Docker, AWS", CONTENT: "general knowledge of dev-ops" },
    { TITLE: "Git", CONTENT: "and it's operations, for version control" },
    { TITLE: "Sketch", CONTENT: "for web design, icons & illustrations" },
    { TITLE: "Jira, Trello", CONTENT: "for project management" },
  ],
};

const Technologies = (): ReactElement => {
  const { COL_1, COL_2 } = TECHNOLOGIES;
  return (
    <Grid.Container gap={2}>
      <Grid xs={24} md={12}>
        {COL_1.map(({ TITLE, CONTENT }, index) => (
          <Description y={1} key={index} title={TITLE} content={CONTENT} />
        ))}
      </Grid>
      <Grid xs={24} md={12}>
        {COL_2.map(({ TITLE, CONTENT }, index) => (
          <Description y={1} key={index} title={TITLE} content={CONTENT} />
        ))}
      </Grid>
    </Grid.Container>
  );
};

export default Technologies;
