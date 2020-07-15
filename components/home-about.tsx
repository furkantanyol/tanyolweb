import React, { ReactElement } from "react";
import { Text, Grid, Avatar, Spacer } from "@zeit-ui/react";
import Description from "./description";

const HomeAbout = (): ReactElement => {
  return (
    <Grid.Container>
      <Grid xs={24} md={12}>
        <Spacer y={1} />
        <Text h3>About Me</Text>
        <Spacer y={1} />
        <div className="home-about-profile">
          <Avatar src="/assets/home/ft-pic.jpeg" size="large" />
          <Text p size="1.1rem">
            Hi! I&apos;m Furkan, a software engineer based in Sydney, Australia.
            I have a passion in creating next-generation software, including
            websites, web & mobile applications. I specialize in building
            efficient and reusable front end abstractions and systems.
          </Text>
          <Text p size="1.1rem">
            Over the 5 years of my career, I&apos;ve worked on great products
            for a range of startups, in a variety of industries. I specialize in
            JavaScript, it&apos;s features, frameworks and libraries. I am
            dedicated to deliver pixel perfect applications with great user
            experience.
          </Text>
        </div>
      </Grid>
      <Grid xs={24} md={12}>
        <Spacer y={1} />
        <Text h3>Technologies I&apos;m Interested In</Text>
        <Spacer y={2} />
        <Grid.Container gap={2}>
          <Grid xs={24} md={12}>
            <Description
              y={1}
              title="JavaScript"
              content="prefer using ESNext features and functional programming paradigms"
            />
            <Description
              y={1}
              title="HTML, CSS"
              content="mobile first, cross-device, cross-browser"
            />
            <Description
              y={1}
              title="React"
              content={
                <span>
                  for building user interface, along with{" "}
                  <b style={{ fontWeight: 400 }}>Redux</b> for state management
                </span>
              }
            />
            <Description
              y={1}
              title="React Native"
              content="for native mobile app development"
            />
            <Description
              y={1}
              title="TypeScript"
              content="for static type-checking"
            />
            <Description
              y={1}
              title={
                <span>
                  Next
                  <small style={{ fontSize: "0.75em", fontWeight: 600 }}>
                    .js
                  </small>
                  , Gatsby
                </span>
              }
              content="for server-side rendering and static site generation"
            />
            <Description
              y={1}
              title="Sass, Less, JSS"
              content="for css pre-processing and optimization"
            />
          </Grid>
          <Grid xs={24} md={12}>
            <Description
              y={1}
              title={
                <span>
                  Node
                  <small style={{ fontSize: "0.75em", fontWeight: 600 }}>
                    .js
                  </small>
                </span>
              }
              content={
                <span>
                  with <b style={{ fontWeight: 400 }}>Express</b>
                </span>
              }
            />
            <Description
              y={1}
              title="Jest"
              content="for testing, following TDD"
            />
            <Description
              y={1}
              title="Python"
              content={
                <span>
                  mostly <b style={{ fontWeight: 400 }}>Django</b>
                </span>
              }
            />
            <Description
              y={1}
              title="Postgres, MongoDB"
              content="database management, Rest & GraphQL API"
            />
            <Description
              y={1}
              title="Docker, AWS"
              content="general knowledge of dev-ops"
            />
            <Description
              y={1}
              title="Git"
              content="and it's operations, for version control"
            />
            <Description
              y={1}
              title="Sketch"
              content="for web design, icons & illustrations"
            />
            <Description
              y={1}
              title="Jira, Trello"
              content="for project management"
            />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default HomeAbout;
