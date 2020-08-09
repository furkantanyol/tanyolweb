import React, { ReactElement } from "react";
import { Text, Grid, Avatar, Spacer, Button } from "@zeit-ui/react";
import NextLink from "next/link";
import { PATHS } from "../lib/constants";
import Technologies from "./resume/technologies";

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
          <NextLink href={PATHS.RESUME}>
            <Button ghost type="secondary">
              Resume
            </Button>
          </NextLink>
        </div>
      </Grid>
      <Grid xs={24} md={12}>
        <Spacer y={1} />
        <Text h3>Technologies I&apos;m Interested In</Text>
        <Spacer y={2} />
        <Technologies />
      </Grid>
    </Grid.Container>
  );
};

export default HomeAbout;
