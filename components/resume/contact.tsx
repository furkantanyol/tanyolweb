import React, { ReactElement } from "react";
import { Grid, Spacer } from "@geist-ui/react";
import { Github, Linkedin, Mail, Phone } from "@geist-ui/react-icons";
import ExternalLink from "../external-link";
import { PATHS } from "../../lib/constants";
import RESUME from "../../lib/resume";

const Contact = (): ReactElement => {
  return (
    <Grid.Container gap={2} className="resume-contact-container">
      <ExternalLink href={PATHS.PHONE}>
        <Phone size={20} />
        <Spacer x={0.5} />
        {RESUME.CONTACT.PHONE}
      </ExternalLink>
      <ExternalLink href={PATHS.EMAIL}>
        <Mail size={20} />
        <Spacer x={0.5} /> {RESUME.CONTACT.EMAIL}
      </ExternalLink>
      <ExternalLink href={PATHS.GITHUB} newTab>
        <Github size={20} />
        <Spacer x={0.5} /> {RESUME.CONTACT.GITHUB}
      </ExternalLink>
      <ExternalLink href={PATHS.LINKEDIN} newTab>
        <Linkedin size={20} />
        <Spacer x={0.5} /> {RESUME.CONTACT.LINKEDIN}
      </ExternalLink>
    </Grid.Container>
  );
};

export default Contact;
