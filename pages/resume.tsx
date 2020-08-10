import React, { ReactElement } from "react";
import Head from "next/head";
import { Display, Grid, Text, Spacer, Button } from "@zeit-ui/react";
import Layout from "../components/layout";
import RESUME from "../lib/resume";
import Contact from "../components/resume/contact";
import Section from "../components/resume/section";
import ListItem from "../components/resume/list-item";
import ReviewItem from "../components/resume/review-item";
import Technologies from "../components/resume/technologies";
import Printer from "@zeit-ui/react-icons/printer";

function print() {
  if (window) window.print();
}

const Resume = (): ReactElement => {
  return (
    <>
      <Layout>
        <Head>
          <title>Furkan Tanyol Resume</title>
        </Head>
        <Display shadow className="resume-display">
          <Grid.Container className="resume-container">
            <Grid xs={24}>
              <Text h2 className="resume-title">
                {RESUME.TITLE}
              </Text>
            </Grid>
            <Grid xs={24}>
              <Text h3 className="resume-subtitle">
                {RESUME.SUBTITLE}
              </Text>
            </Grid>
            <Contact />
            <Section title="Profile">
              <Text p>
                {RESUME.PROFILE}
                <br /> <Text b>Specialties:</Text> {RESUME.SPECIALTIES}
              </Text>
            </Section>
            <Section title="Experience">
              {RESUME.EXPERIENCE.map(({ TITLE, TYPE, DATE, LIST }, index) => (
                <ListItem
                  key={index}
                  title={TITLE}
                  type={TYPE}
                  date={DATE}
                  list={LIST}
                />
              ))}
            </Section>
            <Section title="Volunteer">
              {RESUME.VOLUNTEER.map(({ TITLE, TYPE, DATE, LIST }, index) => (
                <ListItem
                  key={index}
                  title={TITLE}
                  type={TYPE}
                  date={DATE}
                  list={LIST}
                />
              ))}
            </Section>
            <Section title="Freelance">
              {RESUME.FREELANCE.map(
                (
                  { AUTHOR, TITLE, PROJECT, RATING, COMMENT, DATE, LIST },
                  index
                ) => (
                  <ReviewItem
                    key={index}
                    author={AUTHOR}
                    title={TITLE}
                    project={PROJECT}
                    rating={RATING}
                    comment={COMMENT}
                    date={DATE}
                    list={LIST}
                  />
                )
              )}
            </Section>
            <Section title="Education">
              {RESUME.EDUCATION.map(({ TITLE, TYPE, DATE, LIST }, index) => (
                <ListItem
                  key={index}
                  title={TITLE}
                  type={TYPE}
                  date={DATE}
                  list={LIST}
                />
              ))}
            </Section>
            <Section title="Skills">
              <Spacer y={1.5} />
              <Technologies />
            </Section>
            <Section title="Social">
              {RESUME.SOCIAL.map(({ TITLE, TYPE, DATE, LIST }, index) => (
                <ListItem
                  key={index}
                  title={TITLE}
                  type={TYPE}
                  date={DATE}
                  list={LIST}
                />
              ))}
            </Section>
          </Grid.Container>
        </Display>
      </Layout>
      <Button
        auto
        ghost
        type="secondary"
        className="print-button"
        onClick={print}
      >
        <Printer />
      </Button>
    </>
  );
};

export default Resume;
