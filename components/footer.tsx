import React, { ReactElement } from "react";
import { Grid, Spacer } from "@zeit-ui/react";
import {
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "@zeit-ui/react-icons";
import { PATHS } from "../lib/constants";
import ExternalLink from "./external-link";

const Footer = (): ReactElement => {
  return (
    <Grid.Container justify="center">
      <ExternalLink href={PATHS.EMAIL} spaced>
        <Mail />
      </ExternalLink>
      <ExternalLink href={PATHS.GITHUB} spaced newTab>
        <Github />
      </ExternalLink>
      <ExternalLink href={PATHS.LINKEDIN} spaced newTab>
        <Linkedin />
      </ExternalLink>
      <ExternalLink href={PATHS.INSTAGRAM} spaced newTab>
        <Instagram />
      </ExternalLink>
      <ExternalLink href={PATHS.TWITTER} newTab>
        <Twitter />
      </ExternalLink>
      <Spacer y={3} />
    </Grid.Container>
  );
};

export default Footer;
